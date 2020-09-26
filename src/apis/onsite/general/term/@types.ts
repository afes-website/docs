export interface Term {
  enter_scheduled_time: string;
  exit_scheduled_time: string;
  color_id: string;
}

export interface Terms {
  [term_id: string]: Term;
}
