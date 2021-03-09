import { Term } from "../general/term/@types";

export interface Reservation {
  id: string;
  email: string;
  term: Term;
  people_count: number;
}

interface PrivateInfo {
  name: string;
  address: string;
  cellphone: string;
}

export type ReservationWithPrivateInfo = Reservation & PrivateInfo;
