import { Reservation, ReservationWithPrivateInfo } from "../@types";
import { AuthToken } from "../../@types";

export interface Methods {
  /**
   * 予約情報の検索
   *
   * @remarks
   * 必要な権限:
   * - reservation
   *
   * @throws Error
   * 400: 誤ったパラメータが含まれている
   *
   * @returns 検索条件をすべて満たした予約情報の配列
   * 該当するものがない場合は空の配列
   */
  get: {
    reqHeaders: AuthToken;
    query: Partial<Omit<ReservationWithPrivateInfo, "id">>;
    resBody: Reservation;
  };
}
