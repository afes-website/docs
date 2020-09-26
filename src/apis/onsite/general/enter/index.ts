import { AuthToken } from "../../../@types";
import { Guest } from "../guest/@types";

interface EnterCredentials {
  reservation_id: string;
  guest_id: string;
}

export interface Methods {
  /**
   * 文化祭入場処理
   *
   * @remarks
   * 必要な権限:
   * - general
   *
   * @throws Error
   * 400: Status Code とエラー内容が下記の通り対応
   * | Status Code                   | Explanation                                |
   * | :---------------------------- | :----------------------------------------- |
   * | `INVALID_WRISTBAND_CODE`      | リストバンド ID の形式が正しくない         |
   * | `ALREADY_USED_WRISTBAND`      | そのリストバンドは入場処理済みである       |
   * | `RESERVATION_NOT_FOUND`       | 該当する予約情報が存在しない               |
   * | `INVALID_RESERVATION_INFO`    | 該当する予約情報に問題がある               |
   * | `ALREADY_ENTERED_RESERVATION` | 予約者はすでに入場済みである               |
   * | `OUT_OF_RESERVATION_TIME`     | 予約者は入場可能時間外にある               |
   * | `WRONG_WRISTBAND_COLOR`       | リストバンドの色と退場予定時間が一致しない |
   *
   * @returns 来場者に関する情報
   * 予約情報を参照して設定
   */
  post: {
    reqHeaders: AuthToken;
    reqBody: EnterCredentials;
    resBody: Guest;
  };
}
