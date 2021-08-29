interface UserCredentials {
  id: string;
  password: string;
}

/**
 * 1. JSON 形式で credentials を用意
 *   `{"id":"user","pw":"password"}`
 * 2. base64 で難読化
 *   `eyJpZCI6InVzZXIiLCJwdyI6InBhc3N3b3JkIn0K`
 * ---
 * 3. [back] decode -> verify
 */
interface UserEncryptedCredentials {
  encrypted_credentials: string;
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
    reqBody: UserCredentials | UserEncryptedCredentials;
    resBody: {
      token: string;
    };
  };
}
