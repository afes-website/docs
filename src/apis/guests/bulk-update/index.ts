import { AuthToken } from "../../@types";
import { BulkQuery, BulkResult } from "./@types";

export interface Methods {
  /**
   * リアルタイムで送信できなかった処理の記録を送信する
   *
   * @description
   * check-in, check-out, exit, enter の処理記録をまとめて送信する。
   * 各エントリについて、timestamp を基にして状態を再現するように致命的な問題がない限り処理される。
   * また、権限不足でない限り、すべて Log に記録される。ただし、verified = false となる。
   *
   * @remarks
   * check-in, check-out の実行に必要な権限:
   * - executive
   * enter, exit の実行に必要な権限:
   * - exhibition
   *
   * timestamp: 32bit 符号付き UNIX Time の有効な範囲、かつサーバー時間より過去のもののみ受け付ける。
   * そうでないものは INVALID_TIMESTAMP を返却し処理しない。
   *
   * @returns 処理結果
   * Request 内の配列の順番に対応した配列
   * is_ok: Guest テーブルに状態を反映したかどうか
   * code: 正しく処理されたならば null 、そうでなければ該当する理由を表すコード; 対応表は以下
   * | code                | Explanation                                |
   * | :------------------ | :----------------------------------------- |
   * | `FORBIDDEN`         | 権限が不足している                         |
   * | `BAD_REQUEST`       | パラメーターに不備がある                   |
   * | `INVALID_TIMESTAMP` | timestamp が不正                           |
   * | その他              | 各パスの対応表を参照                       |
   */
  post: {
    reqHeaders: AuthToken;
    reqBody: BulkQuery[];
    resBody: BulkResult[];
  };
}
