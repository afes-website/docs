import { Reservation, ReservationWithPrivateInfo } from "../@types";
import { AuthToken } from "../../@types";

export interface Methods {
  get: {
    reqHeaders: AuthToken;
    query: Partial<Omit<ReservationWithPrivateInfo, "id">>;
    resBody: Reservation;
  }
}
