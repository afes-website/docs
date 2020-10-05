import { Exhibition, NewExhibition } from "./@types";
import { AuthToken } from "../../@types";

export interface Methods {
  /**
   * 展示のリストを取得する
   *
   * @returns 全ての展示の配列
   */
  get: {
    resBody: Exhibition[];
  };

  /**
   * exhibition を新規作成する
   *
   * @remarks
   * 必要な権限:
   * - admin
   *
   * @throws Error
   * 400: パラメータに不備がある
   *
   * @returns 作成された exhibition の情報
   */
  post: {
    reqHeaders: AuthToken;
    reqBody: NewExhibition;
    resBody: Exhibition;
  };
}
