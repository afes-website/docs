import { AuthToken } from "../../@types";
import { BulkQuery, BulkResult } from "./@types";

export interface Methods {
  /**
   * 送信できなかった処理の記録を送信する
   *
   * @description
   * check-in, check-out, exit, enter の処理記録をまとめて送信する。
   * Guest が存在しない、権限不足などの致命的な問題がない限りすべての処理が Guest テーブル に反映される。
   * 権限不足でない限り、成功したかどうかに関わらずすべて Log に記録される。
   * bulk-update によって生成された Log はすべて verified = false となる。
   *
   * @remarks
   * check-in, check-out の実行に必要な権限：
   * - executive
   * enter, exit の実行に必要な権限：
   * - exhibition
   * timestamp: 以下の条件すべてを満たすもののみ受け付け、そうでないものは受け付けない (INVALID_TIMESTAMP)
   * - サーバー時間より過去の時間である
   * - 「1970-01-01 00:00:01」から「2038-01-19 03:14:07」の間である
   *
   * @returns 処理結果
   * Request 内の配列の順番と対応した配列が Response に入る。
   * is_applied: Guest テーブルに反映されたかどうか
   * code: 反映できなかった原因; 対応表は以下
   * | error_code          | Explanation                                |
   * | :------------------ | :----------------------------------------- |
   * | `FORBIDDEN`         | 権限が不足している                         |
   * | `BAD_REQUEST`       | (その要素について)パラメーターに不備がある |
   * | `INVALID_TIMESTAMP` | timestamp が受け付けられない               |
   * | その他              | 各パスの対応表を参照                       |
   */
  post: {
    reqHeaders: AuthToken;
    reqBody: BulkQuery[];
    resBody: BulkResult[];
  };
}
