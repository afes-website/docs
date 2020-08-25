import { ReservationWithPrivateInfo } from "../@types";
import { AuthToken } from "../../@types";

export interface Methods {
  get: {
    reqHeaders: AuthToken;
    resBody: ReservationWithPrivateInfo;
  };
}
