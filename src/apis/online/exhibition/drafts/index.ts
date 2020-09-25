import { AuthToken } from "apis/@types";
import { Draft, DraftParameter, NewDraft } from "./@types";

export interface Methods {
  /**
   * draft のリストを取得する
   *
   * @remarks
   * 必要な権限:
   * - exhibition : 自身が作成した draft のみ取得可能
   * - blogAdmin : 全ての draft を取得可能
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
   * - exhibition : exh_id 指定不可
   * - blogAdmin : 任意の exh_id で作成可能
   *
   * @throws Error
   * 400: パラメータに不備がある
   * 403: exhibition は exh_id を指定できない
   *
   * @returns draft の情報
   */
  post: {
    reqHeaders: AuthToken;
    reqBody: NewDraft;
    resBody: Draft;
  };
}
