import { Categories } from "./@types";

export interface Methods {
  /**
   * category のリストを取得する
   *
   * @returns category のリスト
   */
  get: {
    resBody: Categories;
  };
}
