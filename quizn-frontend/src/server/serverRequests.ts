import axios from "axios";

import { Data } from "../data/quizData.types";

import { ResponseType } from "./useAxios";

export const serverRequests = async ({
  requestType,
  url,
}: {
  requestType: string;
  url: string;
}): Promise<ResponseType> => {
  switch (requestType) {
    case "get":
      try {
        const response = await axios.get<Data>(url);
        return response.status === 200
          ? { response, error: false }
          : { response: undefined, error: true };
      } catch (error) {
        return { response: undefined, error: true };
      }

    default:
      return { response: undefined, error: false };
  }
};
