import { AuthToken } from "../@types";

export interface Methods {
  /**
   * 新しい image を投稿する
   *
   * @throws Error
   * 400: パラメータに問題があるか、アップロードされたものが画像でない
   *
   * @returns image の ID
   * id: 自動生成のランダムな40文字の英数列
   */
  post: {
    reqHeaders: AuthToken;

    reqFormat: FormData;
    reqBody: {
      content: File;
    };

    resBody: {
      id: string;
    };
  };
}
