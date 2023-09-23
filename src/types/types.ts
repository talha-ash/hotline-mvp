export type Session = {
  user: User;
  accessToken: string;
  accessTokenExpiry: number;
  error: undefined | string;
};

export type User = {
  age: string;
  email: string;
  id: string;
  username: string;
};

export type Company = {
  name: string;
  id: string;
};
