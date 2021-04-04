import { AuthToken } from "../../@types";
import { ExhStatus } from "../@types";

export interface Methods {
  /**
   * 展示の情報の取得
   *
   * @remarks
   * 必要な権限:
   * - exhibition
   * - general
   *
   * @throws Error
   * 404: 該当する展示が存在しない
   *
   * @returns 展示の情報と滞在状況
   */
  get: {
    reqHeaders: AuthToken;
    resBody: ExhStatus;
  };
}
