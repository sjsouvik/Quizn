import { InitialState } from "../providers/QuizDataProvider/QuizDataProvider.types";
import { Action } from "./action.types";

export const quizReducer = (
  state: InitialState,
  action: Action
): InitialState => {
  switch (action.type) {
    case "INITIALIZE_DATA":
      return {
        ...state,
        quizData: action.payload,
      };

    case "RESET_QUIZ":
      return {
        ...state,
        questions: null,
        currentQuestion: 0,
        score: 0,
        isSubmitted: false,
      };

    case "LOAD_QUESTIONS":
      return { ...state, questions: action.payload.questions };

    case "GO_TO_PREVIOUS_QUESTION":
      return { ...state, currentQuestion: state.currentQuestion - 1 };

    case "GO_TO_NEXT_QUESTION":
      return { ...state, currentQuestion: state.currentQuestion + 1 };

    case "SELECT_OPTION":
      return {
        ...state,
        questions:
          state.questions &&
          state.questions.map((item, index) =>
            index === state.currentQuestion
              ? { ...item, selectedOption: action.payload.option }
              : item
          ),
      };

    case "UPDATE_SCORE":
      return { ...state, score: state.score + action.payload };

    case "SUBMIT_QUIZ":
      return { ...state, isSubmitted: true };

    default:
      return { ...state };
  }
};
