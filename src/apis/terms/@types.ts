export type GuestType =
  | "GuestBlue"
  | "GuestRed"
  | "GuestYellow"
  | "GuestGreen"
  | "GuestPurple"
  | "GuestOrange"
  | "GuestWhite"
  | "StudentGray"
  | "TestBlue"
  | "TestRed"
  | "TestYellow";

export type GuestClass = "General" | "Student";

export interface Term {
  id: string;
  enter_scheduled_time: string;
  exit_scheduled_time: string;
  guest_type: GuestType;
  class: GuestClass;
}

export interface Terms {
  [term_id: string]: Term;
}
