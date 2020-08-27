import { AuthToken } from "../../@types";

export interface UserInfo {
  id: string;
  name: string;
  permissions: {
    admin: boolean;
    blogAdmin: boolean;
    blogWriter: boolean;
    exhibition: boolean;
    general: boolean;
    reservation: boolean;
  };
}

export interface Methods {
  /**
   * ログイン中のユーザーの情報の取得
   *
   * @remarks
   * API token から、アカウント情報を取得
   *
   * @throws Error
   * 401: API Token が無効
   *
   * @returns ログイン中の admin ユーザー情報
   */
  get: {
    resBody: UserInfo;
    reqHeaders: AuthToken;
  };
}
