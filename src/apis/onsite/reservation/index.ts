import { ReservationWithTermId, ReservationPrivateInfo } from "./@types";

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
    reqBody: Omit<ReservationWithTermId & ReservationPrivateInfo, "id">;
    resBody: { id: string };
  };
}
