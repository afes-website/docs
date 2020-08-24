import { BlogArticle, BlogArticleParameter } from "./@types";
import { AuthToken } from "../../@types";

export interface Methods {
  get: {
    resBody: BlogArticle;
  };
  patch: {
    reqHeaders: AuthToken;
    reqBody: BlogArticleParameter;
    resBody: BlogArticle;
  };
  delete: {
    reqHeaders: AuthToken;
  };
}
