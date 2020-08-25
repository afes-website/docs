import { AuthToken } from "../../@types";

export interface Methods {
  post: {
    reqBody: {
      password: string;
    };
    reqHeaders: AuthToken;
  };
}
