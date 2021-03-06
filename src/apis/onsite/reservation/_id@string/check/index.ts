import { AuthToken } from "../../../../@types";
import { Term } from "../../../general/term/@types";

export interface Methods {
  /**
   * 予約者が現在入場可能かのチェック
   *
   * @remarks
   * 必要な権限:
   * - general
   * - reservation
   *
   * @throws Error
   * 404: ID に該当する予約情報が存在しない
   *
   * @returns 入場可否の情報
   * valid: 入場可能であるかどうか
   * status_code: 入場可能である場合は null, そうでない場合は入場処理時に予約情報に関して返され得るコード; 対応表は以下
   * | status_code                   | Explanation                                |
   * | :---------------------------- | :----------------------------------------- |
   * | `RESERVATION_NOT_FOUND`       | 該当する予約情報が存在しない               |
   * | `INVALID_RESERVATION_INFO`    | 該当する予約情報に問題がある               |
   * | `ALREADY_ENTERED_RESERVATION` | 予約者はすでに入場済みである               |
   * | `OUT_OF_RESERVATION_TIME`     | 予約者は入場可能時間外にある               |
   * term: 予約情報につながっている Term
   */
  get: {
    reqHeaders: AuthToken;
    resBody: {
      valid: boolean;
      status_code: string | null;
      term: Term;
    };
  };
}
