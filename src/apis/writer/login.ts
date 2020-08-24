interface WriterUserCredentials {
  id: string;
  password: string;
}

interface Methods {
  post: {
    reqBody: WriterUserCredentials;
    resBody: {
      token: string;
    };
  };
}
