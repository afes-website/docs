import { AuthToken } from "../../../../../@types";
import { Draft } from "../../@types";

export interface Methods {
  /**
   * draft を公開し、status を published にする
   *
   * @remarks
   * 必要な権限:
   * - blogAdmin
   *
   * @throws Error
   * 400: 該当する draft は accepted ではない
   * 404: 該当する draft が存在しない
   *
   * @returns 新しい draft の情報
   */
  patch: {
    reqHeaders: AuthToken;
    resBody: Draft;
  };
}
