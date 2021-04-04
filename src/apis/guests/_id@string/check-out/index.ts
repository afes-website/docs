import { AuthToken } from "../../../@types";
import { Guest } from "../../@types";

export interface Methods {
  /**
   * 文化祭退場処理
   *
   * @remarks
   * 必要な権限:
   * - general
   *
   * @throws Error
   * 400: response Body に必ず status_code が 1 つ含まれる。複数該当する場合はどれか 1 つが返される。
   * 対応表は以下
   * | status_code            | Explanation                 |
   * | :--------------------- | :-------------------------- |
   * | `GUEST_NOT_FOUND`      | 該当する Guest が存在しない |
   * | `GUEST_ALREADY_EXITED` | すでに退場済みである        |
   *
   * @returns 来場者に関する情報
   */
  post: {
    reqHeaders: AuthToken;
    reqBody: { guest_id: string };
    resBody: Guest;
  };
}
