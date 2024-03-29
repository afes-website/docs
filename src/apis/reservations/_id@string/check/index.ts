import { Reservation } from "../../@types";
import { AuthToken } from "../../../@types";

export interface Methods {
  /**
   * 予約者が現在入場可能かのチェック
   *
   * @remarks
   * 必要な権限:
   * - executive
   * - reservation
   *
   * @throws Error
   * 404, "RESERVATION_NOT_FOUND": ID に該当する予約情報が存在しない
   *
   * @returns 入場可否の情報
   * valid: 入場可能であるかどうか
   * error_code: 入場可能である場合は null, そうでない場合は入場処理時に予約情報に関して返され得るコード; 対応表は以下
   * | error_code                | Explanation                    |
   * | :------------------------ | :----------------------------- |
   * | `RESERVATION_NOT_FOUND`   | 該当する予約情報が存在しない   |
   * | `ALL_MEMBER_CHECKED_IN`   | 予約人数の全員が入場済みである |
   * | `OUT_OF_RESERVATION_TIME` | 予約者は入場可能時間外にある   |
   * reservation: 予約情報
   */
  get: {
    reqHeaders: AuthToken;
    resBody: {
      valid: boolean;
      error_code: string | null;
      reservation: Reservation;
    };
  };
}
