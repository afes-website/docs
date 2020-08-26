export interface Methods {
  /**
   * article に対して good を押す
   *
   * @throws Error
   * 404: 該当の article が存在しない
   * 429: リクエスト過多
   *
   * @returns 成功 返り値なし
   */
  put: {
    resBody: void;
  };

  /**
   * article から good を1つ除去する
   *
   * @throws Error
   * 404: 該当する article が存在しない
   * 429: リクエスト過多(具体的な値は未定)
   *
   * @returns 成功 返り値なし
   */
  delete: {
    resBody: void;
  };
}
