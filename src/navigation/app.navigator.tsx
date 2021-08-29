import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { navigationRef, onNavigationReady } from '@services/navigation.service';
import React, { useCallback } from 'react';
import { RootStackNavigator } from './root.navigator';

/*
 * Navigation theming: https://reactnavigation.org/docs/en/next/themes.html
 */
const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // prevent layout blinking when performing navigation
    background: 'transparent',
  },
};

export const AppNavigator = (): React.ReactElement => {
  const onNavReady = useCallback(() => {
    onNavigationReady();
  }, []);

  return (
    <NavigationContainer
      theme={navigatorTheme}
      ref={navigationRef}
      onReady={onNavReady}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};
