import { View } from 'react-native';
import { signOutAction, fetchMeAction } from '@redux/auth/action';
import { getDebitCardInfoAction } from '@redux/debit-card/action';
import { AppStorage } from '@services/app-storage.service';
import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { useDispatch } from 'react-redux';
import { NavigationService } from '@services/navigation.service';
import { ReduxHooksService } from '@services/hooks.services';

export const LaunchScreen = (): React.ReactElement => {
  const dispatch = useDispatch();
  const dispatchResolve = ReduxHooksService.useDispatchResolve();

  useEffect(() => {
    AppStorage.getAuthToken()
      .then(async (authToken) => {
        if (authToken) {
          await dispatch(fetchMeAction());
          await dispatchResolve(getDebitCardInfoAction());
          await RNBootSplash.hide({ fade: true });
          await NavigationService.reset('MainTab');
        } else {
          await RNBootSplash.hide({ fade: true });
          await NavigationService.reset('SignIn');
        }
      })
      .catch(async () => {
        await RNBootSplash.hide({ fade: true });
        await dispatch(signOutAction());
      });
  }, []);
  return <View />;
};
