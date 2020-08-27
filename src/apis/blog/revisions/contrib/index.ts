import { BlogRevision } from "../@types";
import { NewBlogContribRevision } from "./@types";

export interface Methods {
  /**
   * 寄稿を投稿する
   *
   * @remarks
   * 投稿された寄稿は「名もなき麻布生」名義で revision として作成される
   * 「名もなき麻布生」 は ID anonymous, password は空文字列のものを用意する
   *
   * @throws Error
   * 400: パラメータに誤りがある
   *
   * @returns revision の情報
   */
  post: {
    reqBody: NewBlogContribRevision;
    resBody: BlogRevision;
  };
}
