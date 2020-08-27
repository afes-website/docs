import { Guest } from "./@types";
import { AuthToken } from "../../@types";

export interface Methods {
  /**
   * 来場者一覧の取得
   *
   * @remarks
   * 必要な権限:
   * - general
   *
   * @returns guest の一覧
   */
  get: {
    reqHeaders: AuthToken;
    resBody: Guest[];
  };
}
