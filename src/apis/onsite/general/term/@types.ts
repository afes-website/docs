export const guestIdPrefixList = [
  "GB",
  "GR",
  "GY",
  "GG",
  "GP",
  "GO",
  "GW",
  "SG",
  "TB",
  "TR",
  "TY",
] as const;

export type GuestIdPrefix = typeof guestIdPrefixList[number];

export interface Term {
  id: string;
  enter_scheduled_time: string;
  exit_scheduled_time: string;
  prefix: GuestIdPrefix;
}

export interface Terms {
  [term_id: string]: Term;
}
