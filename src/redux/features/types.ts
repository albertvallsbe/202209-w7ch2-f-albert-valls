export interface User {
  id: string;
  userName: string;
  token: string;
}

export interface UserState extends User {
  isLogged: boolean;
}

export interface UserCredentials {
  userName: string;
  passpord: string;
}
