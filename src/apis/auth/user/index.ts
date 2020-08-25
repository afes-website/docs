import { AuthToken } from "../../@types";

export interface UserInfo {
  id: string;
  name: string;
  permissions: {
    admin: boolean;
    blogAdmin: boolean;
    blogWriter: boolean;
    exhibition: boolean;
    general: boolean;
    reservation: boolean;
  };
}

export interface Methods {
  get: {
    resBody: UserInfo;
    reqHeaders: AuthToken;
  };
}
