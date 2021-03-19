import { GuestSummary } from "../guest/@types";

export interface ActivityLog {
  id: string;
  timestamp: string;
  guest: GuestSummary;
  exh_id: string;
  log_type: ActivityLogType;
}

export type ActivityLogType = "enter" | "exit";
