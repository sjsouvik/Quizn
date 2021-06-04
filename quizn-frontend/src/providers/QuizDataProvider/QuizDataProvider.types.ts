import React from "react";
import { Quiz, Question } from "../../data/quizData.types";
import { Action } from "../../reducers/action.types";

export type InitialState = {
  quizData: Quiz[] | undefined;
  questions: Question[] | null;
  currentQuestion: number;
  score: number;
  isSubmitted: boolean;
};

export type QuizContext = {
  state: InitialState;
  dispatch: React.Dispatch<Action>;
};
