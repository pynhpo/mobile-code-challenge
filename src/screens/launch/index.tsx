import { View } from 'react-native';
import { signOutAction, fetchMeAction } from '@redux/auth/action';
import { AppStorage } from '@services/app-storage.service';
import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { useDispatch } from 'react-redux';
import { NavigationService } from '@services/navigation.service';

export const LaunchScreen = (): React.ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    AppStorage.getAuthToken()
      .then(async (authToken) => {
        if (authToken) {
          await dispatch(fetchMeAction());
          RNBootSplash.hide({ fade: true });
          await NavigationService.reset('MainTab');
        } else {
          RNBootSplash.hide({ fade: true });
          // await NavigationService.reset('MainTab');
          await NavigationService.reset('SignIn');
        }
      })
      .catch(async () => {
        RNBootSplash.hide({ fade: true });
        await dispatch(signOutAction());
      });
  }, []);
  return <View />;
};
