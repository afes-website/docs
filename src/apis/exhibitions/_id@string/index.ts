import { AuthToken } from "../../@types";
import { ExhibitionStatus } from "../@types";

export interface Methods {
  /**
   * 展示の情報の取得
   *
   * @throws Error
   * 404: 該当する展示が存在しない
   *
   * @returns 展示の情報と滞在状況
   */
  get: {
    reqHeaders: AuthToken;
    resBody: ExhibitionStatus;
  };
}
