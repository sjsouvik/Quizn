import { Question } from "../data/quizData.types";

export type Action =
  | { type: "RESET_QUIZ" }
  | { type: "LOAD_QUESTIONS"; payload: { questions: Question[] } }
  | { type: "GO_TO_PREVIOUS_QUESTION" }
  | { type: "GO_TO_NEXT_QUESTION" }
  | { type: "SELECT_OPTION"; payload: { option: string } }
  | { type: "UPDATE_SCORE"; payload: number }
  | { type: "SUBMIT_QUIZ" };
