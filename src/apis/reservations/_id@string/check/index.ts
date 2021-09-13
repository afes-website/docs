import { Reservation } from "../../@types";

export interface Methods {
  /**
   * 予約者が現在入場可能かのチェック
   *
   * @throws Error
   * 404, "RESERVATION_NOT_FOUND": ID に該当する予約情報が存在しない
   *
   * @returns 入場可否の情報
   * valid: 入場可能であるかどうか
   * error_code: 入場可能である場合は null, そうでない場合は入場処理時に予約情報に関して返され得るコード; 対応表は以下
   * | error_code                    | Explanation                                |
   * | :---------------------------- | :----------------------------------------- |
   * | `RESERVATION_NOT_FOUND`       | 該当する予約情報が存在しない               |
   * | `INVALID_RESERVATION_INFO`    | 該当する予約情報に問題がある               |
   * | `ALREADY_ENTERED_RESERVATION` | 予約者はすでに入場済みである               |
   * | `OUT_OF_RESERVATION_TIME`     | 予約者は入場可能時間外にある               |
   * reservation: 予約情報
   */
  get: {
    resBody: {
      valid: boolean;
      error_code: string | null;
      reservation: Reservation;
    };
  };
}
