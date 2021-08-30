import { UrlConstant } from '@constants/url.constant';
import { toggleLoadingOverlayModalAction } from '@redux/modal/action';
import { SagaService } from '@services/saga.service';
import {
  all,
  AllEffect,
  call,
  ForkEffect,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { setDebitCardInfoAction } from './action';
import {
  DebitCardConstantsType,
  DebitCardDataType,
  DebitCardActionType,
  ToggleWeeklySpendingLimitDataType,
  UpdateWeeklySpendingLimitDataType,
} from './constants';
import { CrashlyticsService } from '@services/crashlytics.service';
import { NavigationService } from '@services/navigation.service';
import i18n from '@init/i18n';
import { ToastMessageService } from '@services/toast-message.service';
import isFunction from 'lodash/isFunction';

function* getDebitCardInfoSaga(action: DebitCardActionType) {
  const resolver = action?.resolver; // Be careful if u call action without using useDispatchResolve
  try {
    const res: DebitCardDataType = yield SagaService.callApi(
      'get',
      UrlConstant.DEBIT_CARD_INFO,
    );
    yield put(setDebitCardInfoAction(res));
    yield isFunction(resolver?.resolve) && resolver?.resolve();
  } catch (err) {
    if (__DEV__) {
      console.log('***** Request error', err);
    }
    CrashlyticsService.recordError(err);
    yield isFunction(resolver?.reject) && resolver?.reject(err);
  }
}

function* toggleWeeklySpendingLimitSaga(
  action: DebitCardActionType<ToggleWeeklySpendingLimitDataType>,
) {
  try {
    const actionData = action?.payload?.data;
    yield put(toggleLoadingOverlayModalAction({ visible: true }));
    const res: DebitCardDataType = yield SagaService.callApi(
      'patch',
      UrlConstant.TOGGLE_WEEKLY_SPENDING_LIMIT,
      {
        data: actionData,
      },
    );
    yield put(setDebitCardInfoAction(res));
    yield put(toggleLoadingOverlayModalAction({ visible: false }));
    ToastMessageService.toastSuccess(i18n.t('infos.success'));
  } catch (err) {
    yield put(toggleLoadingOverlayModalAction({ visible: false }));
    ToastMessageService.toastWarning(i18n.t('errors.normal_notice'));
    if (__DEV__) {
      console.log('***** Request error', err);
    }
    CrashlyticsService.recordError(err);
  }
}

function* UpdateWeeklySpendingLimitSaga(
  action: DebitCardActionType<UpdateWeeklySpendingLimitDataType>,
) {
  try {
    const actionData = action?.payload?.data;
    yield put(toggleLoadingOverlayModalAction({ visible: true }));
    const res: DebitCardDataType = yield SagaService.callApi(
      'patch',
      UrlConstant.UPDATE_WEEKLY_SPENDING_LIMIT,
      {
        data: actionData,
      },
    );
    yield put(setDebitCardInfoAction(res));
    yield put(toggleLoadingOverlayModalAction({ visible: false }));
    yield call(NavigationService.goBack);
    ToastMessageService.toastSuccess(i18n.t('infos.success'));
  } catch (err) {
    yield put(toggleLoadingOverlayModalAction({ visible: false }));
    ToastMessageService.toastWarning(i18n.t('errors.normal_notice'));
    if (__DEV__) {
      console.log('***** Request error', err);
    }
    CrashlyticsService.recordError(err);
  }
}

export function* debitCardSaga(): Generator<
  AllEffect<ForkEffect<never>>,
  void,
  unknown
> {
  yield all([
    takeLatest<DebitCardConstantsType>(
      'GET_DEBIT_CARD_INFO',
      getDebitCardInfoSaga,
    ),
    takeLatest<DebitCardConstantsType>(
      'TOGGLE_WEEKLY_SPENDING_LIMIT',
      toggleWeeklySpendingLimitSaga,
    ),
    takeLatest<DebitCardConstantsType>(
      'UPDATE_WEEKLY_SPENDING_LIMIT',
      UpdateWeeklySpendingLimitSaga,
    ),
  ]);
}
