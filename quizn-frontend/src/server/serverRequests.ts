import axios from "axios";

import { Data } from "../data/quizData.types";

import { RequestType, ResponseType } from "./server.types";

export const serverRequests = async ({
  requestType,
  url,
  data,
  token,
}: RequestType): Promise<ResponseType> => {
  switch (requestType) {
    case "get":
      try {
        const response = await axios.get<Data>(url, token);
        return response.status === 200
          ? { response, statusCode: response.status }
          : { response, statusCode: 400 };
      } catch (error) {
        return { response: undefined, statusCode: error.response.status };
      }

    case "post":
      try {
        const response = await axios.post(url, data, token);
        return response.status === 200
          ? { response, statusCode: response.status }
          : { response: undefined, statusCode: 400 };
      } catch (error) {
        return { response: undefined, statusCode: error.response.status };
      }

    default:
      return { response: undefined, statusCode: 400 };
  }
};
