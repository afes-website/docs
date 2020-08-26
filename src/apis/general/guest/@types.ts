export interface Guest {
  id: string;
  type: Wristband;
  entered_at: string;
  exit_scheduled_time: string | null;
  exited_at: string | null;
  exh_id: string | null;
}

export type GuestSummary = Pick<Guest, "id" | "type">;

export interface Wristband {
  color_id: string;
  color_hex: string;
  term_id: string;
}
