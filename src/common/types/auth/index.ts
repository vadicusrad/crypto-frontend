export interface IPropsLogin {
  setPassword: (value: string) => void;
  setEmail: (value: string) => void;
  navigate: (to: string) => void;
}

export interface IPropsRegister {
  setFirstName: (value: string) => void;
  setUserName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setRepeatPassword: (value: string) => void;
  navigate: (to: string) => void;
}

export interface IAuthState {
  user: IPublicUser;
  isLogged: boolean;
}

interface IPublicUser {
  id: number | null;
  firstName: string;
  userName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  whatchlist: [IWatchlist];
}

interface IWatchlist {
  id: number | null;
  name: string;
  assetId: string;
  createdAt: string;
  updatedAt: string;
  user: number | null;
}
