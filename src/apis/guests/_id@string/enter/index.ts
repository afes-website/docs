import { AuthToken } from "../../../@types";
import { Guest } from "../../@types";

export interface Methods {
  /**
   * 展示入室処理
   *
   * @remarks
   * 必要な権限:
   * - exhibition: 自展示のみ指定可能
   * - admin: 存在する全展示を指定可能
   *
   * @throws Error
   * 404: ID に該当する Guest が存在しない
   * 403: 許可されていない操作
   * 400: response Body に必ず error_code が 1 つ含まれる。複数該当する場合はどれか 1 つが返される。
   * 対応表は以下
   * | error_code                | Explanation                                  |
   * | :------------------------ | :------------------------------------------- |
   * | `GUEST_ALREADY_ENTERED`   | この展示にすでに入室済みでまだ退室していない |
   * | `PEOPLE_CAPACITY_EXCEEDED` | 人数制限に達した                             |
   * | `GUEST_ALREADY_EXITED`    | すでに退場済みである                         |
   * | `EXIT_TIME_EXCEEDED`      | 退場予定時刻を過ぎている                     |
   * | `EXHIBITION_NOT_FOUND`    | 該当する展示が存在しない                     |
   *
   * @returns 来場者に関する情報
   */
  post: {
    reqHeaders: AuthToken;
    reqBody: { exhibition_id: string };
    resBody: Guest;
  };
}
