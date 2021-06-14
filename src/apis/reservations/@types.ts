import { Term } from "../terms/@types";

export interface Reservation {
  id: string;
  term: Term;
}

export interface ReservationQuery {
  term_id: string;
}
