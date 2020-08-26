import { AuthToken } from "../../@types";
import { AllStatus } from "./@types";

export interface Methods {
  /**
   * 全展示・校内の情報の取得
   *
   * @remarks
   * 必要な権限:
   * - general
   *
   * @returns 各展示・校内の情報と滞在状況
   */
  get: {
    reqHeaders: AuthToken;
    resBody: AllStatus;
  };
}
