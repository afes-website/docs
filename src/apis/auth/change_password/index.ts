import { AuthToken } from "../../@types";

export interface Methods {
  /**
   * パスワード変更
   *
   * @throws Error
   * 400: 新しいパスワードが条件を満たしていない
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
