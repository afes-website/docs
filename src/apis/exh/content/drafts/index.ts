import { AuthToken } from "apis/@types";
import { Draft, DraftParameter, NewDraft } from "./@types";

export interface Methods {
  /**
   * draft のリストを取得する
   *
   * @remarks
   * 必要な権限:
   * - exh : 自身が作成した draft のみ
   * - blogAdmin : 全ての draft
   *
   * @returns 条件を満たす draft の配列
   */
  get: {
    reqHeaders: AuthToken;
    resBody: Draft[];
    query?: DraftParameter;
  };

  /**
   * draft を新規作成する
   * 既に waiting の draft がある場合は先にある方が reject される
   *
   * @remarks
   * 必要な権限:
   * - exh
   *
   * @throws Error
   * 400: パラメータに不備がある
   *
   * @returns draft の情報
   */
  post: {
    reqHeaders: AuthToken;
    reqBody: NewDraft;
    resBody: Draft;
  };
}
