export interface Guest {
  id: string;
  color: Wristband;
}

export interface GuestDetail extends Guest {
  entered_at: string;
  exit_scheduled_time: string | null;
  exited_at: string | null;
  exh_id: string | null;
}

export interface Wristband {
  id: string;
  name: string;
  hex: string;
}
