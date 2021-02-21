export interface ExhStatus {
  count: {
    /**
     * ターム別の滞在人数
     *
     * @remarks
     * 以下のいずれかまたは両方の条件を満たす Term についての人数を返す
     * - Guest が1人以上居る
     * - 入場可能時間中である
     */
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
