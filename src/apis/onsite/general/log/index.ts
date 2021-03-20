import { AuthToken } from "../../../@types";
import { ActivityLog, ActivityLogParamater } from "./@types";

export interface Methods {
  /**
   * 条件を満たす行動ログの取得
   *
   * @remarks
   * 必要な権限:
   * - general
   * - exhibition
   *
   * @throws Error
   * 404: ID に該当する Guest が存在しない
   *
   * @returns 対象者の行動ログ
   */
  get: {
    reqHeaders: AuthToken;
    query?: ActivityLogParamater;
    resBody: ActivityLog[];
  };
}
