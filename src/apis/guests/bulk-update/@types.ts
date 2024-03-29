export type BulkQuery = {
  guest_id: string;
  timestamp: string;
} & (
  | { command: "enter" | "exit" | "check-out" }
  | { command: "check-in" | "register-spare"; reservation_id: string }
);

export type BulkResult = {
  is_ok: boolean;
  code: string | null;
};
