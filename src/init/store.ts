import AsyncStorage from '@react-native-async-storage/async-storage';
import dynostore, { dynamicReducers } from '@redux-dynostore/core';
import { dynamicSagas } from '@redux-dynostore/redux-saga';
import { authSaga } from '@redux/auth/saga';
import { purchaseOrderSaga } from '@redux/purchase-order/saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import Offline from './offline';
import Reducer from './reducer';
import Saga from './saga';

const middleware = __DEV__
  ? applyMiddleware(Saga, Offline.offlineMiddleware, createLogger())
  : applyMiddleware(Saga, Offline.offlineMiddleware);
const enhancer = [
  middleware,
  dynostore(dynamicReducers(), dynamicSagas(Saga)),
  Offline.enhanceStore,
];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['payment', 'auth'],
  // timeout: 0, // The code base checks for falsy, so 0 disables
};

const persistedReducer = persistReducer(
  persistConfig,
  Offline.enhanceReducer(Reducer),
);

const store = createStore(persistedReducer, {}, compose(...enhancer));

Saga.run(authSaga);
Saga.run(purchaseOrderSaga);

export const persistor = persistStore(store);

export default store;
