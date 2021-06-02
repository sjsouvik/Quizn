import React, { createContext, useContext, useReducer } from "react";

import { quizData } from "../../data/quizData";

import { quizReducer } from "../../reducers/quizReducer";

import { InitialState, QuizContext } from "./QuizDataProvider.types";

const dataState: InitialState = {
  quizData,
  questions: null,
  currentQuestion: 0,
  score: 0,
  isSubmitted: false,
};

const QuizDataContext = createContext<QuizContext>({} as QuizContext);

const QuizDataProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, dataState);
  return (
    <QuizDataContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizDataContext.Provider>
  );
};

export const useData = () => useContext(QuizDataContext);

export default QuizDataProvider;
