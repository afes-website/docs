import { BlogRevision, BlogRevisionParameter, NewBlogRevision } from "./@types";
import { AuthToken } from "../../@types";

export interface Methods {
  /**
   * revision のリストを取得
   *
   * @remarks
   * 自身が author であるような revision のみ取得可能
   * ただし権限 blogAdmin を持っている場合、全ての revision を取得可能
   *
   * @throws Error
   * 400: 誤ったパラメータが含まれている
   *
   * @returns 検索条件をすべて満たした revision の配列
   * 該当するものがない場合は空の配列
   */
  get: {
    reqHeaders: AuthToken;
    query?: BlogRevisionParameter;
    resBody: BlogRevision[];
  };

  /**
   * 新しい revision を作る
   *
   * @remarks
   * 必要な権限:
   * - blogWriter
   *
   * @throws Error
   * 400: パラメータに過不足がある
   *
   * @returns revision の情報
   */
  post: {
    reqHeaders: AuthToken;
    reqBody: NewBlogRevision;
    resBody: BlogRevision;
  };
}
