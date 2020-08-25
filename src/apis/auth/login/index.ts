interface UserCredentials {
  id: string;
  password: string;
}

export interface Methods {
  post: {
    reqBody: UserCredentials;
    resBody: {
      token: string;
    };
  };
}
