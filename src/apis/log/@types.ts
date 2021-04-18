import { GuestSummary } from "../guests/@types";

export interface ActivityLog {
  id: string;
  timestamp: string;
  guest: GuestSummary;
  exh_id: string;
  log_type: ActivityLogType;
}

export type ActivityLogType = "enter" | "exit";

export interface ActivityLogParameter
  extends Partial<Omit<ActivityLog, "guest">> {
  guest_id?: string;
}
