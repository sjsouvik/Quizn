import React from "react";
import { Quiz, Question } from "../../data/quizData.types";
import { Action } from "../../reducers/action.types";

export type QuizScore = {
  _id: number;
  title: string;
};

export type Scores = {
  _id: number;
  quiz: QuizScore;
  score: number;
};

export type InitialState = {
  quizData: Quiz[] | undefined;
  questions: Question[] | null;
  currentQuestion: number;
  scores: Scores[];
  isSubmitted: boolean;
};

export type QuizContext = {
  state: InitialState;
  dispatch: React.Dispatch<Action>;
};
