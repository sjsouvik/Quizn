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
        [action.payload.name]: action.payload.data,
      };

    case "RESET_QUIZ":
      return {
        ...state,
        questions: null,
        currentQuestion: 0,
        // score: 0,
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
      return {
        ...state,
        scores: state.scores.find(
          (item) => item.quiz._id === action.payload.quizId
        )
          ? state.scores.map((item) =>
              item.quiz._id === action.payload.quizId &&
              action.payload.score > item.score
                ? { ...item, score: action.payload.score }
                : item
            )
          : [
              ...state.scores,
              {
                _id: Math.random(),
                quiz: { _id: Math.random(), title: action.payload.quizTitle },
                score: action.payload.score,
              },
            ],
      };

    case "SUBMIT_QUIZ":
      return { ...state, isSubmitted: true };

    default:
      return { ...state };
  }
};

// export const isQuizPlayedBefore=(scores:number, quizId:number)=>{
//   return scores.find(item=>item.quiz._id===quizId)
// }
