import { AuthToken } from "../../@types";
import { Guest } from "../../general/guest/@types";

export interface Methods {
  /**
   * 展示入室処理
   *
   * @remarks
   * 必要な権限:
   * - exhibition
   *
   * @throws Error
   * 400: status code とエラー内容が下記の通り対応
   * | Status Code             | Explanation                                  |
   * | :---------------------- | :------------------------------------------- |
   * | `GUEST_NOT_FOUND`       | 該当する Guest が存在しない                  |
   * | `GUEST_ALREADY_ENTERED` | この展示にすでに入室済みでまだ退室していない |
   * | `PEOPLE_LIMIT_EXCEEDED` | 人数制限に達した                             |
   * | `GUEST_ALREADY_EXITED`  | すでに退場済みである                         |
   * | `EXIT_TIME_EXCEEDED`    | 退場予定時刻を過ぎている                     |
   *
   * @returns 展示の滞在者数に関する情報
   */
  post: {
    reqHeaders: AuthToken;
    reqBody: { guest_id: string };
    resBody: Guest;
  };
}
