import { AuthToken } from "../../@types";
import { AllStatus } from "./@types";

export interface Methods {
  get: {
    reqHeaders: AuthToken;
    resBody: AllStatus;
  };
}
