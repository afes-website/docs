import { Term } from "../terms/@types";

export interface Guest {
  id: string;
  registered_at: string;
  revoked_at: string | null;
  is_spare: boolean;
  exhibition_id: string | null;
  term: Term;
}

export type GuestSummary = Pick<Guest, "id" | "term">;

export interface RegisterCredentials {
  reservation_id: string;
  guest_id: string;
}
