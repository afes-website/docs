export interface Guest {
  id: string;
  color: Wristband;
  entered_at: string;
  exit_scheduled_time: string | null;
  exited_at: string | null;
  exh_id: string | null;
}

export type GuestSummary = Pick<Guest, "id" | "color">;

export interface Wristband {
  id: string;
  name: string;
  hex: string;
}
