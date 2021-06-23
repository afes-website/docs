import { Term } from "../terms/@types";

export interface Reservation {
  id: string;
  term: Term;
  member_all: number;
  member_checked_in: number;
}

export interface ReservationQuery {
  term_id: string;
}
