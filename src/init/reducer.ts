import { authReducer } from '@redux/auth/reducer';
import { AuthStateType, initialAuthState } from '@redux/auth/constants';
import { modalReducer } from '@redux/modal/reducer';
import { ModalStateType, initialModalState } from '@redux/modal/constants';
import { debitCardReducer } from '@redux/debit-card/reducer';
import {
  DebitCardStateType,
  initialDebitCardState,
} from '@redux/debit-card/constants';
import { combineReducers, CombinedState } from 'redux';

export type CombinedStateType = CombinedState<{
  auth: AuthStateType;
  modal: ModalStateType;
  debitCard: DebitCardStateType;
}>;

export const initialState: CombinedStateType = {
  auth: initialAuthState,
  modal: initialModalState,
  debitCard: initialDebitCardState,
};

export default combineReducers({
  auth: authReducer,
  modal: modalReducer,
  debitCard: debitCardReducer,
});
