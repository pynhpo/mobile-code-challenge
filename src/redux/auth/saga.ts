import { UrlConstant } from '@constants/url.constant';
import { toggleLoadingOverlayModalAction } from '@redux/modal/action';
import { AppStorage } from '@services/app-storage.service';
import { SagaService } from '@services/saga.service';
import {
  all,
  AllEffect,
  call,
  ForkEffect,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { setUserAction } from './action';
import {
  initialUserInfo,
  AuthConstantsType,
  UserDataType,
  AuthActionType,
  SignInDataType,
} from './constants';
import { ResolverType } from '@services/hooks.services';
import isFunction from 'lodash/isFunction';
import { CrashlyticsService } from '@services/crashlytics.service';
import { NavigationService } from '@services/navigation.service';
import i18n from '@init/i18n';
import { ToastMessageService } from '@services/toast-message.service';

function* signOutSaga(action: AuthActionType) {
  // const resolver = action.resolver || {}; // Be careful if u call action without using useDispatchResolve
  try {
    yield put(toggleLoadingOverlayModalAction({ visible: true }));

    yield call(AppStorage.removeAuthToken);
    yield put(setUserAction(initialUserInfo));
    yield call(NavigationService.reset, 'SignIn');
  } catch (err) {
    if (__DEV__) {
      console.log('***** logout error', err);
    }
    CrashlyticsService.recordError(err);
  } finally {
    yield put(toggleLoadingOverlayModalAction({ visible: false }));
    // isFunction(resolver?.resolve) && resolver?.resolve();
  }
}

function* fetchMeSaga() {
  try {
    const res: UserDataType & { token: string } = yield SagaService.callApi(
      'get',
      UrlConstant.ME,
    );
    yield put(
      setUserAction({
        _id: res._id,
        phone: res.phone,
        name: res.name,
      }),
    );
    yield call(AppStorage.setAuthToken, res.token);
  } catch (err) {
    if (__DEV__) {
      console.log('***** Request error', err);
    }
    CrashlyticsService.recordError(err);
  }
}

function* signInSaga(action: AuthActionType<SignInDataType>) {
  try {
    const actionData = action?.payload?.data;
    if (!actionData) {
      throw new Error('no_data_login_action');
    }
    yield put(toggleLoadingOverlayModalAction({ visible: true }));
    const res: UserDataType & { token: string } = yield SagaService.callApi(
      'post',
      UrlConstant.LOGIN,
      {
        skipAuthorization: true,
        data: actionData,
      },
    );
    yield call(AppStorage.setAuthToken, res.token);
    yield put(
      setUserAction({
        _id: res._id,
        phone: res.phone,
        name: res.name,
      }),
    );
    yield put(toggleLoadingOverlayModalAction({ visible: false }));
    yield call(NavigationService.reset, 'MainTab');
    ToastMessageService.toastSuccess(i18n.t('screens.sign_in.login_success'));
  } catch (err) {
    yield put(toggleLoadingOverlayModalAction({ visible: false }));
    ToastMessageService.toastWarning(i18n.t('screens.sign_in.login_failed'));
    if (__DEV__) {
      console.log('***** Request error', err);
    }
    CrashlyticsService.recordError(err);
  }
}
export function* authSaga(): Generator<
  AllEffect<ForkEffect<never>>,
  void,
  unknown
> {
  yield all([
    takeLatest<AuthConstantsType>('SIGN_IN', signInSaga),
    takeLatest<AuthConstantsType>('FETCH_ME', fetchMeSaga),
    takeLatest<AuthConstantsType>('SIGN_OUT', signOutSaga),
  ]);
}
