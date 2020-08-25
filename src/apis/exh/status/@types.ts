export interface ExhStatus {
  count: {
    [key: string]: number;
  };
  limit: number;
  room_id: string | null;
}
