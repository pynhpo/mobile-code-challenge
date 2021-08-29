import { authReducer } from '@redux/auth/reducer';
import { AuthStateType, initialAuthState } from '@redux/auth/constants';
import { modalReducer } from '@redux/modal/reducer';
import { ModalStateType, initialModalState } from '@redux/modal/constants';
import { combineReducers, CombinedState } from 'redux';

export type CombinedStateType = CombinedState<{
  auth: AuthStateType;
  modal: ModalStateType;
}>;

export const initialState: CombinedStateType = {
  auth: initialAuthState,
  modal: initialModalState,
};

export default combineReducers({
  auth: authReducer,
  modal: modalReducer,
});
