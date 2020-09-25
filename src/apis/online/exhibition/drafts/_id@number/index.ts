import { Draft, NewDraft } from "../@types";
import { AuthToken } from "../../../../@types";

export interface Methods {
  /**
   * draft の詳細を取得する
   *
   * @remarks
   * 必要な権限:
   * - exhibition : 自身が作成した draft の場合のみ取得可能
   * - blogAdmin : 全ての場合において取得可能
   *
   * @throws Error
   * 403: 該当する draft の閲覧権限がない
   * 404: 該当する draft が存在しない
   *
   * @returns draft の情報
   */
  get: {
    reqHeaders: AuthToken;
    resBody: Draft;
  };
}
