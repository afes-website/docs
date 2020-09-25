import { Exhibition } from "../../@types";

export interface Methods {
  /**
   * 展示の詳細を取得する
   *
   * @returns 展示の情報
   */
  get: {
    resBody: Exhibition;
  };
}
