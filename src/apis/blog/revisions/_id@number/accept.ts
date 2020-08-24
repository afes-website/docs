import { BlogRevision } from "../@types";
import { AuthToken } from "../../../@types";

export interface Methods {
  patch: {
    reqHeaders: AuthToken;
    resBody: BlogRevision;
  };
}
