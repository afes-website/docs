import { Exhibition, UpdateExhibition } from "../@types";
import { AuthToken } from "../../../@types";

export interface Methods {
  /**
   * 展示の詳細を取得する
   *
   * @throws Error
   * 404: 該当する exhibition が存在しない
   *
   * @returns 展示の情報
   */
  get: {
    resBody: Exhibition;
  };

  /**
   * exhibition を更新する
   *
   * @remarks
   * 必要な権限:
   * - admin
   *
   * @throws Error
   * 400: パラメータに不備がある
   * 404: 該当する exhibition が存在しない
   *
   * @returns 更新された exhibition の情報
   */
  patch: {
    reqHeaders: AuthToken;
    reqBody: UpdateExhibition;
    resBody: Exhibition;
  };
}
