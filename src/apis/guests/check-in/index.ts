import { AuthToken } from "../../@types";
import { Guest } from "../@types";

interface EnterCredentials {
  reservation_id: string;
  guest_id: string;
}

export interface Methods {
  /**
   * 文化祭入場処理
   *
   * @remarks
   * 必要な権限:
   * - executive
   *
   * @throws Error
   * 400: response Body に必ず error_code が 1 つ含まれる。複数該当する場合はどれか 1 つが返される。
   * 対応表は以下
   * | error_code                 | Explanation                                |
   * | :------------------------- | :----------------------------------------- |
   * | `INVALID_WRISTBAND_CODE`   | リストバンド ID の形式が正しくない         |
   * | `ALREADY_USED_WRISTBAND`   | そのリストバンドは入場処理済みである       |
   * | `RESERVATION_NOT_FOUND`    | 該当する予約情報が存在しない               |
   * | `INVALID_RESERVATION_INFO` | 該当する予約情報に問題がある               |
   * | `ALL_MEMBER_CHECKED_IN`    | 予約人数の全員が入場済みである             |
   * | `OUT_OF_RESERVATION_TIME`  | 予約者は入場可能時間外にある               |
   * | `WRONG_WRISTBAND_COLOR`    | リストバンドの色と退場予定時間が一致しない |
   *
   * @returns 来場者に関する情報
   * 予約情報を参照して設定
   */
  post: {
    reqHeaders: AuthToken;
    reqBody: EnterCredentials;
    resBody: Guest;
  };
}
