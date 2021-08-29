import { AuthActionType, UserDataType, SignInDataType } from './constants';

// Set user action
export const setUserAction = (
  data: UserDataType,
): AuthActionType<UserDataType> => ({
  type: 'SET_USER',
  payload: { data },
});

// Sign In action
export const signInAction = (
  data: SignInDataType,
): AuthActionType<SignInDataType> => ({
  type: 'SIGN_IN',
  payload: { data },
});

// Fetch me action
export const fetchMeAction = (): AuthActionType => ({
  type: 'FETCH_ME',
});

// Sign out action
export const signOutAction = (): AuthActionType => ({
  type: 'SIGN_OUT',
});
