export type AuthConstantsType =
  | 'SET_USER'
  | 'SIGN_IN'
  | 'FETCH_ME'
  | 'SIGN_OUT';

export type UserDataType = {
  _id: string;
  phone: string;
  name: string;
};

export type SignInDataType = {
  phone: string;
  password: string;
};

export const initialUserInfo: UserDataType = {
  _id: '',
  name: '',
  phone: '',
};

export type AuthActionType<T = undefined> = {
  type: AuthConstantsType;
  payload?: {
    data: T;
  };
};

export type AuthStateType = {
  user: UserDataType;
};

export const initialAuthState: AuthStateType = {
  user: initialUserInfo,
};
