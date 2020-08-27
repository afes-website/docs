import { BlogRevision } from "../../@types";
import { AuthToken } from "../../../../@types";

export interface Methods {
  /**
   * revision を拒否する
   *
   * @remarks
   * 必要な権限:
   * - blogAdmin
   *
   * @throws Error
   * 404: 該当する revision が存在しない
   *
   * @returns 成功 返り値なし
   */
  patch: {
    reqHeaders: AuthToken;
    resBody: BlogRevision;
  };
}
