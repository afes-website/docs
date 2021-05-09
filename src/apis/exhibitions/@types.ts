export interface ExhibitionStatus {
  info: {
    room_id: string;
    name: string;
    thumbnail_image_id: string;
  };
  count: {
    /**
     * ターム別の滞在人数
     *
     * @remarks
     * 以下のいずれかまたは両方の条件を満たす Term についての人数を返す
     * - Guest が1人以上居る
     * - 入場可能時間内である
     */
    [term_id: string]: number;
  };
  capacity: number;
}

export interface AllStatus {
  exh: {
    [exhibition_id: string]: ExhibitionStatus;
  };
  all: Pick<ExhibitionStatus, "count" | "capacity">;
}
