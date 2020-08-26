import { BlogRevision } from "../../@types";
import { AuthToken } from "../../../../@types";

export interface Methods {
  /**
   * revision を承認する
   *
   * @remarks
   * 必要な権限:
   * - blogAdmin
   *
   * revision の status を accept にする
   *
   * @throws Error
   * 404: 該当する revision が存在しない
   *
   * @returns 新しい revision の情報
   */
  patch: {
    reqHeaders: AuthToken;
    resBody: BlogRevision;
  };
}
