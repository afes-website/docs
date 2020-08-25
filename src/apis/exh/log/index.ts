import { AuthToken } from "../../@types";
import { ActivityLog } from "../../general/guest/_id@string/log/@types";

export interface Methods {
  get: {
    reqHeaders: AuthToken;
    resBody: ActivityLog[];
  }
}
