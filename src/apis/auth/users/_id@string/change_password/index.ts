import { AuthToken } from "../../../../@types";

export interface Methods {
  /**
   * パスワード変更
   *
   * @remarks
   * 必要な権限:
   * - (none): 自分のユーザーのみ指定可能
   * - admin: 全ユーザーを指定可能
   *
   * @throws Error
   * 400: 新しいパスワードが条件を満たしていない
   * 403: 許可されていない操作
   * 404, "USER_NOT_FOUND": ID に該当する User が存在しない
   *
   * @returns 成功 返り値なし
   */
  post: {
    reqBody: {
      password: string;
    };
    reqHeaders: AuthToken;
  };
}
