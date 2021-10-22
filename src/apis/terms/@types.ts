export type GuestType =
  | "GuestBlue"
  | "GuestRed"
  | "GuestYellow"
  | "ParentPurple"
  | "GuestWhite"
  | "StudentGray"
  | "TestBlue"
  | "TestRed"
  | "TestYellow";

export type GuestClass = "General" | "Student" | "Parent";

export interface Term {
  id: string;
  enter_scheduled_time: string;
  exit_scheduled_time: string;
  guest_type: GuestType;
  guest_class: GuestClass;
}

export interface Terms {
  [term_id: string]: Term;
}
