import { AuthToken } from "../../@types";
import { Draft, DraftParameter, NewDraft } from "./@types";

export interface Methods {
  /**
   * draft のリストを取得する
   *
   * @remarks
   * 必要な権限:
   * - exhibition : 自身が作成した draft のみ取得可能
   * - blogAdmin : 全ての draft を取得可能
   * - teacher : 全ての draft を取得可能
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
   * - exhibition
   * - blogAdmin
   *
   * blogAdmin 権限がない場合:
   *   exh_id はログインしているユーザーの ID と同一でなければならない
   *
   * @throws Error
   * 400: パラメータに不備がある
   * 403: 自身以外の exh_id を指定する権限がない
   *
   * @returns draft の情報
   */
  post: {
    reqHeaders: AuthToken;
    reqBody: NewDraft;
    resBody: Draft;
  };
}
