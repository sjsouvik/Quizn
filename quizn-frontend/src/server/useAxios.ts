import { useEffect, useState } from "react";

import { serverRequests } from "./serverRequests";

import { useData } from "../providers/QuizDataProvider/QuizDataProvider";
import { useAuth } from "../providers/AuthProvider/AuthProvider";

export const useAxios = (endpoint: string, propertyToInitialize: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { dispatch } = useData();
  const { authToken, authUser } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        if (endpoint === "quiz") {
          const serverResponse = await serverRequests({
            url: `${process.env.REACT_APP_BACKEND}/${endpoint}`,
            requestType: "get",
          });

          const quizzes =
            serverResponse.response && serverResponse.response.data.quizzes;
          if (!error) {
            dispatch({
              type: "INITIALIZE_DATA",
              payload: { name: propertyToInitialize, data: quizzes },
            });
          }
        } else if (authUser && authToken) {
          const serverResponse = await serverRequests({
            requestType: "get",
            url: `${process.env.REACT_APP_BACKEND}/${endpoint}/${authUser._id}`,
            token: { headers: { authorization: `Bearer ${authToken}` } },
          });

          const scores =
            serverResponse.response && serverResponse.response.data.score
              ? serverResponse.response.data.score.scores
              : [];

          if (!error) {
            dispatch({
              type: "INITIALIZE_DATA",
              payload: { name: propertyToInitialize, data: scores },
            });
          }
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
