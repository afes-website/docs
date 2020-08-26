interface UserCredentials {
  id: string;
  password: string;
}

export interface Methods {
  /**
   * ログイン認証と API token の受け取り
   *
   * @remarks
   * 5回/分まで試行可能
   *
   * @throws Error
   * 401: 認証失敗
   * 429: 試行回数の上限に到達
   *
   * @returns API token
   */
  post: {
    reqBody: UserCredentials;
    resBody: {
      token: string;
    };
  };
}
