import { Reservation } from "../@types";

export interface Methods {
  /**
   * メール認証
   *
   * @throws Error
   * 400: すでに使用された・または存在しない予約 ID
   * 429: 試行回数の上限に到達 (3回 / 10分)
   *
   * @returns 予約情報の一部
   */
  post: {
    reqBody: { auth_id: string };
    resBody: Reservation;
  };
}
