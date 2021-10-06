import { GuestSummary } from "../guests/@types";

export type ActivityLog = {
  id: string;
  timestamp: string;
  guest: GuestSummary;
} & (
  | { log_type: "check-in" | "check-out" | "register-spare" | "force-revoke" }
  | { log_type: "enter" | "exit"; exhibition_id: string }
);

export interface ActivityLogParameter
  extends Partial<Omit<ActivityLog, "guest">> {
  exhibition_id: string;
  guest_id?: string;
}
