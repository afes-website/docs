import { AuthToken } from "../../@types";
import { UserInfo } from "../@types";

export interface Methods {
  /**
   * 全ユーザーの情報の取得
   *
   * @remarks
   * 必要な権限:
   * - admin
   *
   * @returns ログイン中のユーザー情報
   */
  get: {
    reqHeaders: AuthToken;
    resBody: UserInfo[];
  };
}
