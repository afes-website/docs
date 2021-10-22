import { AuthToken } from "../../@types";
import { UserInfo } from "../@types";

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
   * @returns ログイン中のユーザー情報
   */
  get: {
    resBody: UserInfo;
    reqHeaders: AuthToken;
  };
}
