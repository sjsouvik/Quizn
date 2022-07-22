import React from "react";
import { serverRequests } from "./serverRequests";

import { Action } from "../reducers/action.types";

export const loginWithCreds = async (email: string, password: string) => {
  const serverResponse = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/login`,
    data: { email: email, password: password },
  });

  const { response, statusCode } = serverResponse;

  if (statusCode === 401 || statusCode === 400 || statusCode === 422) {
    return { error: true, message: "Invalid email and password combination" };
  }

  if (statusCode !== 200) {
    return { error: true, message: "Something went wrong" };
  }

  return response && response.data ? { data: response.data } : { data: null };
};

export const signup = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  const serverResponse = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/signup`,
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    },
  });

  const { statusCode } = serverResponse;

  if (statusCode === 422) {
    return {
      error: true,
      message: "Give a valid email to register",
    };
  }

  if (statusCode === 409) {
    return {
      error: true,
      message: "This email is already registered",
    };
  }

  if (statusCode !== 200) {
    return { error: true, message: "Something went wrong" };
  }

  return { message: "Successfully registered" };
};

export const updateWithHighestScore = async (
  dispatch: React.Dispatch<Action>,
  score: number,
  quizId: number,
  quizTitle: string,
  userId: string,
  token: string
) => {
  const serverResponse = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/score/${userId}`,
    data: { scores: [{ quiz: quizId, score }] },
    token: { headers: { authorization: `Bearer ${token}` } },
  });

  const { statusCode } = serverResponse;

  if (statusCode === 200) {
    dispatch({
      type: "UPDATE_SCORE",
      payload: { quizId, quizTitle, score },
    });
    dispatch({ type: "SUBMIT_QUIZ" });
  }
};
