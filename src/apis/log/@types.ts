import { GuestSummary } from "../guests/@types";

export interface ActivityLog {
  id: string;
  timestamp: string;
  guest: GuestSummary;
  exh_id: string;
  log_type: ActivityLogType;
}

export type ActivityLogType = "enter" | "exit";

export interface ActivityLogParamatar
  extends Partial<Omit<ActivityLog, "guest">> {
  guest_id?: string;
  reservation_id?: string; // 指定するには reservation 権限が必要
}
