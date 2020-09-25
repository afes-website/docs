import { Exhibition } from "./@types";

export interface Methods {
  /**
   * 展示のリストを取得する
   *
   * @returns 全ての展示の配列
   */
  get: {
    resBody: Exhibition[];
  };
}
