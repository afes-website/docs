export interface Methods {
  /**
   * ID から image を取得する
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
