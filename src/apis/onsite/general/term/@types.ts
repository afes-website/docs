const colorIdList = [
  "GB",
  "GR",
  "GY",
  "GV",
  "GO",
  "GG",
  "GW",
  "SG",
  "TB",
  "TR",
  "TY",
] as const;

export type ColorId = typeof colorIdList[number];

export interface Term {
  enter_scheduled_time: string;
  exit_scheduled_time: string;
  color_id: ColorId;
}

export interface Terms {
  [term_id: string]: Term;
}
