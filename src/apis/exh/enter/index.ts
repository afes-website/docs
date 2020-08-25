import { AuthToken } from "../../@types";
import { ExhStatus } from "../status/@types";

export interface Methods {
  post: {
    reqHeaders: AuthToken;
    reqBody: { guest_id: string };
    resBody: ExhStatus;
  };
}
