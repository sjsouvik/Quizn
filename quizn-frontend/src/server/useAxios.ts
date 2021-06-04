import { useEffect, useState } from "react";

import { serverRequests } from "./serverRequests";

import { useData } from "../providers/QuizDataProvider/QuizDataProvider";

import { Data } from "../data/quizData.types";
import { AxiosResponse } from "axios";

export type ResponseType =
  | {
      response: AxiosResponse<Data>;
      error: boolean;
    }
  | { response: undefined; error: boolean };

export const useAxios = (endpoint: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { dispatch } = useData();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const serverResponse = await serverRequests({
          url: `${process.env.REACT_APP_BACKEND}/${endpoint}`,
          requestType: "get",
        });

        const quizzes =
          serverResponse.response && serverResponse.response.data.quizzes;
        if (!error) {
          console.log(quizzes);
          dispatch({ type: "INITIALIZE_DATA", payload: quizzes });
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { error, loading };
};
