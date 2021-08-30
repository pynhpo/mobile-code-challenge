/* eslint-disable react/display-name */
import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MainBottomNavigation } from '@components/main-bottom-navigation.component';
import { useTranslation } from 'react-i18next';
import { HomeSvg } from '@components/svg/home-svg';
import { DebitCardSvg } from '@components/svg/debit-card-svg';
import { PaymentsSvg } from '@components/svg/payments-svg';
import { CreditSvg } from '@components/svg/credit-svg';
import { ProfileSvg } from '@components/svg/profile-svg';
import { DebitCardScreen } from '@screens/debit-card/index';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const EmptyComponent = () => <View />;

const DebitCardStackNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode="none" initialRouteName="DebitCard">
    <Stack.Screen name="DebitCard" component={DebitCardScreen} />
  </Stack.Navigator>
);

export const MainTabNavigator = (): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <BottomTab.Navigator
      initialRouteName="DebitCard"
      tabBar={(props) => <MainBottomNavigation {...props} />}>
      <BottomTab.Screen
        name="Home"
        component={EmptyComponent}
        options={{
          title: t<string>('components.main_tab.home'),
          tabBarIcon: ({ color }: { color: string }) => (
            <HomeSvg fill={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="DebitCard"
        component={DebitCardStackNavigator}
        options={{
          title: t<string>('components.main_tab.debit_card'),
          tabBarIcon: ({ color }: { color: string }) => (
            <DebitCardSvg fill={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Payments"
        component={EmptyComponent}
        options={{
          title: t<string>('components.main_tab.payments'),
          tabBarIcon: ({ color }: { color: string }) => (
            <PaymentsSvg fill={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Credit"
        component={EmptyComponent}
        options={{
          title: t<string>('components.main_tab.credit'),
          tabBarIcon: ({ color }: { color: string }) => (
            <CreditSvg fill={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={EmptyComponent}
        options={{
          title: t<string>('components.main_tab.profile'),
          tabBarIcon: ({ color }: { color: string }) => (
            <ProfileSvg fill={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
