import { AuthToken } from "../@types";
import { ActivityLog, ActivityLogParameter } from "./@types";

export interface Methods {
  /**
   * 条件を満たす行動ログの取得
   *
   * @remarks
   * 必要な権限:
   * - executive
   * - exhibition
   *
   * @throws Error
   * 403: 権限が不足しているか、許可されていないパラメーターを使用している
   *
   * @returns 対象者の行動ログ
   */
  get: {
    reqHeaders: AuthToken;
    query?: ActivityLogParameter;
    resBody: ActivityLog[];
  };
}
