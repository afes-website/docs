import { AuthToken } from "../../@types";
import { Terms } from "./@types";

export interface Methods {
  /**
   * 文化祭の各タームの情報
   *
   * @remarks
   * 必要な権限:
   * - general
   *
   * @returns 各タームの情報
   */
  post: {
    reqHeaders: AuthToken;
    resBody: Terms;
  };
}
