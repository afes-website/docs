import { Reservation } from "../@types";
import { AuthToken } from "../../@types";

export interface Methods {
  /**
   * 予約情報の確認
   *
   * @remarks
   * 必要な権限:
   * - reservation
   *
   * @throws Error
   * 404, "RESERVATION_NOT_FOUND": ID に該当する予約情報が存在しない
   *
   * @returns 予約情報
   */
  get: {
    reqHeaders: AuthToken;
    resBody: Reservation;
  };
}
