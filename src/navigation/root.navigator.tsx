import { createStackNavigator } from '@react-navigation/stack';
import { LaunchScreen } from '@screens/launch/index';
// import { SignInScreen } from '@screens/sign-in/index';
import { MainTabNavigator } from './main-tab.navigator';
import React from 'react';

const Stack = createStackNavigator();

export const RootStackNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode="none" initialRouteName="Launch">
    <Stack.Screen name="Launch" component={LaunchScreen} />
    <Stack.Screen name="MainTab" component={MainTabNavigator} />
    {/* <Stack.Screen name="SignIn" component={SignInScreen} /> */}
  </Stack.Navigator>
);
