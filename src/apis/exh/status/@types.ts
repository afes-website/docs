export interface ExhStatus {
  count: {
    [key: string]: number;
  };
  limit: number;
  room_id: string;
}

export interface AllStatus {
  exh: {
    [key: string]: ExhStatus;
  };
  all: Pick<ExhStatus, "count" | "limit">;
}
