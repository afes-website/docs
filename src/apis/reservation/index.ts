import { ReservationWithPrivateInfo } from "./@types";

export interface Methods {
  /**
   * 予約申し込み
   *
   * @throws Error
   * 429: 試行回数の上限に到達 (3回 / 10分)
   *
   * @returns 予約 ID
   * またメールにメール認証用のコードを送付
   */
  post: {
    reqBody: Omit<ReservationWithPrivateInfo, "id">;
    resBody: { id: string };
  };
}
