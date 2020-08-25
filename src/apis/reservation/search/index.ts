import { UserInfo } from "../../auth/user";
import { Reservation, ReservationWithPrivateInfo } from "../@types";

export interface Methods {
  get: {
    reqHeaders: UserInfo;
    query: Partial<Omit<ReservationWithPrivateInfo, "id">>;
    resBody: Reservation;
  }
}
