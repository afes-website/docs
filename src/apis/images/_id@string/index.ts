export interface Methods {
  /**
   * ID から image を取得する
   *
   * @param size
   * - `s`: 長辺を 400px に縮小
   * - `m`: 長辺を 1440px に縮小
   *
   * @throws Error
   * 404: 指定された image が存在しない
   *
   * @returns
   * 指定された image
   */
  get: {
    query?: {
      size?: "s" | "m";
    };
    resBody: File;
  };
}
