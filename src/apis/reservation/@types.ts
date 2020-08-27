export interface Reservation {
  id: string;
  email: string;
  term_id: string;
  people_count: number;
}

interface PrivateInfo {
  name: string;
  address: string;
  cellphone: string;
}

export type ReservationWithPrivateInfo = Reservation & PrivateInfo;
