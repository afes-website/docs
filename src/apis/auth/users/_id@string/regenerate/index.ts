import { AuthToken } from "../../../../@types";

export interface Methods {
  /**
   * セッション鍵を再生成し、ログイン済みのセッションをすべて無効化する
   *
   * @remarks
   * 必要な権限:
   * - admin: 全ユーザーを指定可能
   *
   * @throws Error
   * 404, "USER_NOT_FOUND": ID に該当する User が存在しない
   *
   * @returns 成功 返り値なし
   */
  post: {
    reqHeaders: AuthToken;
  };
}
