import { Term } from "../terms/@types";

export interface Reservation {
  id: string;
  term: Term;
  // 予約人数
  member_all: number;
  // すでに入場済みの人数
  member_checked_in: number;
}

export interface ReservationQuery {
  term_id: string;
}
