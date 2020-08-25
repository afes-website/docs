import { AuthToken } from "../../@types";

export interface Methods {
  post: {
    reqHeaders: AuthToken;
    reqBody: { guest_id: string };
  };
}
