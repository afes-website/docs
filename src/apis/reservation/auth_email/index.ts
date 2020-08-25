import { Reservation } from "../@types";

export interface Methods {
  post: {
    reqBody: { auth_id: string };
    resBody: Reservation;
  }
}
