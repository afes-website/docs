import { AuthToken } from "../../../@types";
import { Guest } from "../../@types";

export interface Methods {
  /**
   * 展示退室処理
   *
   * @remarks
   * 必要な権限:
   * - exhibition
   * - admin
   *
   * @remarks
   * admin権限がない場合 exhibition_id には実行ユーザーの Id を指定しなければならない
   *
   * @throws Error
   * 404: ID に該当する Guest が存在しない
   * 400: response Body に必ず status_code が 1 つ含まれる。複数該当する場合はどれか 1 つが返される。
   * 対応表は以下
   * | status_code            | Explanation                 |
   * | :--------------------- | :-------------------------- |
   * | `GUEST_ALREADY_EXITED` | すでに退場済みである        |
   * | `EXHIBITION_NOT_FOUND` | 該当する展示が存在しない    |
   *
   * 403: これを実行する権限がない または 自身以外の exhibition_id を指定する権限がない
   *
   * @returns 来場者に関する情報
   */
  post: {
    reqHeaders: AuthToken;
    reqBody: { exhibition_id: string };
    resBody: Guest;
  };
}
