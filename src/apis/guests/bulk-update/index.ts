import { AuthToken } from "../../@types";
import { BulkQuery, BulkResult } from "./@types";

export interface Methods {
  /**
   * 検証が行えなかった処理の記録を送信する
   *
   * @remarks
   * Request 内の配列の順番と Response の配列の順番は一致する
   *
   * 正しくない処理を要求した場合でも可能な限り受け付ける。受け付けた場合、処理は以下のようになる。
   * - 生成される ActivityLog について verified = false となる。
   * - is_succeeded = true となり、かつ code に発生した問題が（複数あれば一つだけが）代入される。
   *
   * 受け付けなかった場合は is_succeeded = false となり、受け付けられなかった原因となる code が（複数あれば一つだけが）出力される。
   *
   * code の対応表は各パスの対応表を参照。
   *
   * @returns 来場者に関する情報
   */
  post: {
    reqHeaders: AuthToken;
    reqBody: BulkQuery[];
    resBody: BulkResult[];
  };
}
