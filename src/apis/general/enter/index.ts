import { AuthToken } from "../../@types";

interface EnterCredentials {
  reservation_id: string;
  guest_id: string;
}

export interface Methods {
  post: {
    reqHeaders: AuthToken;
    reqBody: EnterCredentials;
    resBody: { exit_time: string };
  };
}
