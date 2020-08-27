import { BlogRevision } from "../@types";
import { AuthToken } from "../../../@types";

export interface Methods {
  /**
   * revision を取得する
   *
   * @remarks
   * 自身が author であるような revision のみ取得可能
   * ただし権限 blogAdmin を持っている場合、全ての revision を取得可能
   *
   * @throws Error
   * 403: 該当する revision の閲覧権限がない
   * 404: 該当する revision が存在しない
   *
   * @returns revision の情報
   */
  get: {
    reqHeaders: AuthToken;
    resBody: BlogRevision;
  };
  /**
   * revision を編集する
   *
   * @remarks
   * 必要な権限:
   * - blogAdmin
   *
   * 指定された revision を元に新たに revision を作成する
   * 指定された元の revision は更新されない
   *
   * @throws Error
   * 400: パラメータに不備がある
   *
   * @returns 新しい revision の情報
   */
  post: {
    reqBody: BlogRevision;
    resBody: Partial<Omit<BlogRevision, "id" | "timestamp" | "status">>;
  };
}
