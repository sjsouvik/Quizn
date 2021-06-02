import React from "react";
import { Data, Question } from "../../data/quizData.types";
import { Action } from "../../reducers/action.types";

export type InitialState = {
  quizData: Data;
  questions: Question[] | null;
  currentQuestion: number;
  score: number;
  isSubmitted: boolean;
};

export type QuizContext = {
  state: InitialState;
  dispatch: React.Dispatch<Action>;
};
