import { AuthToken } from "../../../../../@types";
import { Draft } from "../../@types";

export interface Methods {
  /**
   * draft を承認し、status を accepted にする
   *
   * @remarks
   * 必要な権限:
   * - blogAdmin
   *
   * @throws Error
   * 404: 該当する draft が存在しない
   *
   * @returns 新しい draft の情報
   */
  patch: {
    reqHeaders: AuthToken;
    resBody: Draft;
  };
}
