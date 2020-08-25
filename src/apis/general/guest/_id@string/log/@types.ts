import { Guest } from "../../@types";

export interface ActivityLog {
  id: string;
  timestamp: string;
  guest: Guest;
  exh_id: string;
  log_type: ActivityLogType;
}

export enum ActivityLogType {
  enter = "enter",
  exit = "exit",
}
