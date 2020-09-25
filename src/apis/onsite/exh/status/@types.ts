export interface ExhStatus {
  count: {
    [term_id: string]: number;
  };
  limit: number;
  room_id: string;
}

export interface AllStatus {
  exh: {
    [exh_id: string]: ExhStatus;
  };
  all: Pick<ExhStatus, "count" | "limit">;
}
