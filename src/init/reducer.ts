import { authReducer, AuthStateType } from '@redux/auth/reducer';
import { loadingReducer, LoadingStateType } from '@redux/loading/reducer';
import { modalReducer, ModalStateType } from '@redux/modal/reducer';
import { paymentReducer, PaymentStateType } from '@redux/payment/reducer';
import {
  purchaseOrderReducer,
  PurchaseOrderStateType,
} from '@redux/purchase-order/reducer';
// import { rootReducer, RootStateType } from '@redux/root/reducer';
import { combineReducers } from 'redux';

export type CombinedStateType = {
  // root: RootStateType;
  auth: AuthStateType;
  modal: ModalStateType;
  loading: LoadingStateType;
  payment: PaymentStateType;
  purchaseOrder: PurchaseOrderStateType;
};

export default combineReducers({
  // root: rootReducer,
  auth: authReducer,
  modal: modalReducer,
  loading: loadingReducer,
  payment: paymentReducer,
  purchaseOrder: purchaseOrderReducer,
});
