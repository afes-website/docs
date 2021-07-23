export interface Methods {
  /**
   * 展示の thumbnail image を取得する
   *
   * @throws Error
   * 404: 該当する展示が存在しない
   *
   * @returns
   * 展示の thumbnail image
   */
  get: {
    query?: {
      size?: "s" | "m";
    };
    resBody: File;
  };
}
