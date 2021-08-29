import { AuthToken } from "../../../@types";
import { UserInfo } from "../../@types";

export interface Methods {
  /**
   * ユーザーの情報の取得
   *
   * @remarks
   * 必要な権限:
   * - (none): 自分のユーザーのみ指定可能
   * - admin: 全ユーザーを指定可能
   *
   * @throws Error
   * 403: 許可されていない操作
   * 404: ID に該当する User が存在しない
   *
   * @returns ログイン中のユーザー情報
   */
  get: {
    reqHeaders: AuthToken;
    resBody: UserInfo;
  };
}
