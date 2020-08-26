import { Guest } from "../@types";
import { AuthToken } from "../../../@types";

export interface Methods {
  /**
   * 来場者の情報の取得
   *
   * @remarks
   * 必要な権限:
   * - general
   *
   * @throws Error
   * 404: ID に該当する Guest が存在しない
   *
   * @returns 来場者情報
   */
  get: {
    reqHeaders: AuthToken;
    resBody: Guest;
  };
}
