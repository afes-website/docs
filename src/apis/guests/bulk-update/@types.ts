export type BulkQuery = {
  guest_id: string;
} & (
  | { command: "enter" | "exit" | "check-out" }
  | { command: "check-in" | "register-spare"; reservation_id: string }
);

export type BulkResult = {
  is_succeeded: boolean;
  code: string | null;
};
