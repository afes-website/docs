import {
  BlogRevision,
  BlogRevisionFilterParameter,
  NewBlogRevision,
} from "./@types";
import { AuthToken } from "../../@types";

export interface Methods {
  get: {
    reqHeaders: AuthToken;
    query?: BlogRevisionFilterParameter;
    resBody: BlogRevision[];
  };
  post: {
    reqHeaders: AuthToken;
    reqBody: NewBlogRevision;
    resBody: BlogRevision;
  };
}
