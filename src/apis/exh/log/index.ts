import { AuthToken } from "../../@types";
import { ActivityLog } from "../../general/guest/_id@string/log/@types";

export interface Methods {
  /**
   * 展示のスキャンログの取得
   *
   * @remarks
   * 必要な権限:
   * - exhibition
   *
   * @returns 展示に関係する行動ログのリスト
   */
  get: {
    reqHeaders: AuthToken;
    resBody: ActivityLog[];
  };
}
