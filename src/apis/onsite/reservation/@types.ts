import { Term } from "../general/term/@types";

/**
 * 予約情報のベース そのままでは使用しない
 */
interface ReservationBase {
  id: string;
  email: string;
  people_count: number;
}

/**
 * 基本的に response body で使用
 */
export type ReservationWithTerm = ReservationBase & { term: Term };
/**
 * 基本的に request body で使用
 */
export type ReservationWithTermId = ReservationBase & { term_id: string };

/**
 * 予約情報の個人情報部分 そのままでは使用しない
 */
export interface ReservationPrivateInfo {
  name: string;
  address: string;
  cellphone: string;
}
