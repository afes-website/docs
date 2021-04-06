import { Term } from "../terms/@types";

interface Base {
  id: string;
  email: string;
  people_count: number;
  guest_id: string | null;
}

interface PrivateInfo {
  name: string;
  address: string;
  cellphone: string;
}

export type Reservation = Base & { term: Term };
export type ReservationWithPrivateInfo = Reservation & PrivateInfo;

export type ReservationQuery = Omit<Base, "id"> & { term_id: string };
export type ReservationQueryWithPrivateInfo = ReservationQuery & PrivateInfo;
