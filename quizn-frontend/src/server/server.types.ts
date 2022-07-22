import { AxiosResponse } from "axios";

export type RequestType = {
  requestType: string;
  url: string;
  data?: {};
  token?: {};
};

export type ResponseType =
  | {
      response: AxiosResponse<any>;
      statusCode: number;
    }
  | { response: undefined; statusCode: number };
