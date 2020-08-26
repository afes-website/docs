import { BlogRevision } from "../@types";
import { AuthToken } from "../../../@types";

export interface Methods {
  get: {
    reqHeaders: AuthToken;
    resBody: BlogRevision;
  };
  post: {
    reqBody: BlogRevision;
    resBody: Partial<Omit<BlogRevision, 'id' | 'timestamp' | "status" >>;
  }
}
