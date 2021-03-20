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
   * - reservation
   *
   * @remarks
   * reservation_id を指定するには reservation 権限が必要
   *
   * @throws Error
   * 403: 権限が不足しているか、許可されていないパラメーターを使用している
   *
   * @returns 対象者の行動ログ
   */
  get: {
    reqHeaders: AuthToken;
    query?: ActivityLogParamater;
    resBody: ActivityLog[];
  };
}
