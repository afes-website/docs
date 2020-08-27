const colors = [
  "blue",
  "red",
  "yellow",
  "violet",
  "orange",
  "green",
  "gray",
  "white",
  "test_blue",
  "test_red",
  "test_yellow",
] as const;

export interface Guest {
  id: string;
  color_id: typeof colors[number];
  term_id: string;
  entered_at: string;
  exit_scheduled_time: string | null;
  exited_at: string | null;
  exh_id: string | null;
}

export type GuestSummary = Pick<Guest, "id" | "color_id" | "term_id">;
