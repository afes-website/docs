import { AuthToken } from "../../../@types";
import { ExhStatus } from "../@types";

export interface Methods {
  get: {
    reqHeaders: AuthToken;
    resBody: ExhStatus;
  };
}
