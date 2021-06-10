import { AxiosResponse } from "axios";

export type RequestType = {
  requestType: string;
  url: string;
  data?: {};
};

export type ResponseType =
  | {
      response: AxiosResponse<any>;
      statusCode: number;
    }
  | { response: undefined; statusCode: number };
