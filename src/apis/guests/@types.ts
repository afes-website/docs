import { Term } from "../terms/@types";

export interface Guest {
  id: string;
  entered_at: string;
  exited_at: string | null;
  exhibition_id: string | null;
  term: Term;
}

export type GuestSummary = Pick<Guest, "id" | "term">;
