import { ReservationEntry } from "./@types";

export interface Methods {
  /**
   * 予約申し込み
   *
   * @throws Error
   * 429: 試行回数の上限に到達 (3回 / 10分)
   *
   * @returns 予約ID
   */
  post: {
    reqBody: ReservationEntry;
    resBody: { id: string };
  };
}
