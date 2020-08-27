import { AuthToken } from "../../../../@types";
import { ActivityLog } from "./@types";

export interface Methods {
  /**
   * 対象者の行動ログの取得
   *
   * @remarks
   * 必要な権限:
   * - general
   *
   * @throws Error
   * 404: ID に該当する Guest が存在しない
   *
   * @returns 対象者の行動ログ
   */
  get: {
    reqHeaders: AuthToken;
    resBody: ActivityLog[];
  };
}
