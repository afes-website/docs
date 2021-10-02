import { AuthToken } from "../../@types";
import { Guest, RegisterCredentials } from "../@types";

export interface Methods {
  /**
   * 予約人数に計上されない spare としての guest を登録する
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
   * | `NO_MEMBER_CHECKED_IN`     | まだ誰も入場していない                     |
   * | `EXIT_TIME_EXCEEDED`       | 退場予定時刻を過ぎている                   |
   * | `WRONG_WRISTBAND_COLOR`    | リストバンドの色と退場予定時間が一致しない |
   *
   * @returns 来場者に関する情報
   * 予約情報を参照して設定
   */
  post: {
    reqHeaders: AuthToken;
    reqBody: RegisterCredentials;
    resBody: Guest;
  };
}
