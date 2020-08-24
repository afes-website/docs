import { AuthToken } from "../@types";

export interface Methods {
  post: {
    reqHeaders: AuthToken;

    reqFormat: FormData;
    reqBody: {
      content: File;
    };

    resBody: {
      id: string;
    };
  };
}
