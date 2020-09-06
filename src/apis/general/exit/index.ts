import { AuthToken } from "../../@types";
import { Guest } from "../guest/@types";

export interface Methods {
  /**
   * 文化祭退場処理
   *
   * @remarks
   * 必要な権限:
   * - general
   *
   * @throws Error
   * 404: ID に該当する Guest が存在しない
   * 409: 該当する Guest はすでに退場済み
   *
   * @returns 返り値なし
   */
  post: {
    reqHeaders: AuthToken;
    reqBody: Guest;
  };
}
