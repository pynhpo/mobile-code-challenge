import {
  initialAuthState,
  AuthActionType,
  AuthStateType,
  UserDataType,
} from './constants';

export function authReducer(
  state = initialAuthState,
  action: AuthActionType<UserDataType>,
): AuthStateType {
  switch (action.type) {
    case 'SET_USER':
      const userData = action?.payload?.data;
      return userData
        ? {
            ...state,
            user: userData,
          }
        : state;
    default:
      return state;
  }
}
