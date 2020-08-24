import { BlogRevision } from "../@types";
import { NewBlogContribRevision } from "./@types";

export interface Methods {
  post: {
    reqBody: NewBlogContribRevision;
    resBody: BlogRevision;
  };
}
