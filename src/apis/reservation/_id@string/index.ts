import { UserInfo } from "../../auth/user";
import { ReservationWithPrivateInfo } from "../@types";

export interface Methods {
  get: {
    reqHeaders: UserInfo;
    resBody: ReservationWithPrivateInfo;
  }
}
