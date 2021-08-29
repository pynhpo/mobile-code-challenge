import { CombinedStateType } from '@init/reducer';
import { createSelector } from 'reselect';
import { AuthStateType, initialAuthState } from './constants';

export const makeSelectAuthDomain = (state: CombinedStateType): AuthStateType =>
  state.auth || initialAuthState;

export const selectUser = createSelector(
  makeSelectAuthDomain,
  (auth) => auth.user,
);

export const selectUserPhone = createSelector(
  makeSelectAuthDomain,
  (auth) => auth.user.phone,
);
