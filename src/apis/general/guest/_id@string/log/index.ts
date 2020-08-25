import { AuthToken } from "../../../../@types";
import { ActivityLog } from "./@types";

export interface Methods {
  get: {
    reqHeaders: AuthToken;
    resBody: ActivityLog[];
  }
}
