import { useEffect, useState } from "react";

import { serverRequests } from "./serverRequests";

import { useData } from "../providers/QuizDataProvider/QuizDataProvider";

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
