import { ImageParameters } from "./@types";

export interface Methods {
  /**
   * ID から image を取得する
   *
   * orig を指定すると、アップロードされた元サイズの画像が取得される
   * 幅・高さの両方を指定すると、縦横でそれぞれ拡大縮小をする
   * 幅・高さの片方を指定すると、画像全体を適切に拡大縮小する
   * すべて指定しない場合は、縦幅が最大600、横幅が最大1080になるように設定される
   *
   * @throws Error
   * 404: 指定された image が存在しない
   *
   * @returns
   * 指定された image
   */
  get: {
    query?: ImageParameters;
    resBody: File;
  };
}
