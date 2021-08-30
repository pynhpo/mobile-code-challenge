import AsyncStorage from '@react-native-async-storage/async-storage';
import { authSaga } from '@redux/auth/saga';
import { debitCardSaga } from '@redux/debit-card/saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer, { CombinedStateType, initialState } from './reducer';
import Saga from './saga';

const middleware = __DEV__
  ? applyMiddleware(Saga, createLogger())
  : applyMiddleware(Saga);

const persistConfig: PersistConfig<CombinedStateType> = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['auth'],
  // timeout: 0, // The code base checks for falsy, so 0 disables
};

const persistedReducer = persistReducer<CombinedStateType>(
  persistConfig,
  rootReducer,
);

const store = createStore(persistedReducer, initialState, compose(middleware));

Saga.run(authSaga);
Saga.run(debitCardSaga);

export const persistor = persistStore(store);

export default store;
