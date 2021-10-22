import { AllStatus } from "./@types";

export interface Methods {
  /**
   * 全展示・校内の情報の取得
   *
   * @returns 各展示・校内の情報と滞在状況
   */
  get: {
    resBody: AllStatus;
  };
}
