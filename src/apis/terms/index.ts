import { AuthToken } from "../@types";
import { Terms } from "./@types";

export interface Methods {
  /**
   * 文化祭の各タームの情報
   *
   * @remarks
   * 必要な権限:
   * - executive
   * - exhibition
   *
   * @returns 各タームの情報
   */
  get: {
    reqHeaders: AuthToken;
    resBody: Terms;
  };
}
