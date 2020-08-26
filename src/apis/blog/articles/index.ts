import { BlogArticle, BlogArticleParameter } from "./@types";

export interface Methods {
  /**
   * article のリストを取得
   *
   * @throws Error
   * 400: 誤ったパラメータが含まれている
   *
   * @returns 検索条件をすべて満たした article の配列
   * 該当するものがない場合は空の配列
   */
  get: {
    query?: BlogArticleParameter;
    resBody: BlogArticle[];
  };
}
