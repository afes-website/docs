import { BlogArticle, BlogArticleParameter } from "../@types";
import { AuthToken } from "../../../@types";

export interface Methods {
  /**
   * article の情報を返す
   *
   * @throws Error
   * 404: ID に該当する article が存在しない
   *
   * @returns article の情報
   */
  get: {
    resBody: BlogArticle;
  };

  /**
   * article を更新する
   *
   * @remarks
   * 必要な権限:
   * - blogAdmin
   *
   * article に対応する要素を渡す事で更新する事ができる
   * 一部の要素のみを渡すと、渡された要素のみを更新する
   *
   * @throws Error
   * 400: 指定された revision の article_id とパスの article_id が一致しない
   * 404: 指定された revision は存在しない
   * 409: 指定された revision の状態が accepted でない
   *
   * @returns 新しい article の情報
   */
  patch: {
    reqHeaders: AuthToken;
    reqBody: BlogArticleParameter;
    resBody: BlogArticle;
  };

  /**
   * article を削除する
   *
   * @remarks
   * 必要な権限:
   * - blogAdmin
   *
   * article オブジェクトを削除するのみで revision は削除されない
   *
   * @throws Error
   * 404: 指定された article が存在しない
   *
   * @returns 成功 返り値なし
   */
  delete: {
    reqHeaders: AuthToken;
  };
}
