export interface Guest {
  id: string;
  color_id: string;
  term_id: string;
  entered_at: string;
  exit_scheduled_time: string | null;
  exited_at: string | null;
  exh_id: string | null;
}

export type GuestSummary = Pick<Guest, "id" | "color_id" | "term_id">;
