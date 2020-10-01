import { AuthToken } from "../../../../@types";
import { Draft } from "../../@types";

export interface Methods {
  /**
   * draft を却下し、status を rejected にする
   *
   * @remarks
   * 必要な権限:
   * - blogAdmin : review_status を変更
   * - teacher : teacher_review_status を変更
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
