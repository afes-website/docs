import { Draft, NewDraft } from "../@types";
import { AuthToken } from "../../../../@types";

export interface Methods {
  /**
   * draft の詳細を取得する
   *
   * @remarks
   * 必要な権限:
   * - exh : 自身が作成した draft の場合のみ取得可能
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

  /**
   * draft を編集する
   *
   * @remarks
   * 必要な権限:
   * - exh : 自身が作成した draft の場合のみ編集可能
   * - blogAdmin : 全ての場合において編集可能
   *
   * @throws Error
   * 403: 該当する draft の閲覧権限がない
   * 404: 該当する draft が存在しない
   *
   * @returns draft の情報
   */
  patch: {
    reqHeaders: AuthToken;
    reqBody: Pick<Draft, keyof NewDraft | "id">;
    resBody: Draft;
  };
}
