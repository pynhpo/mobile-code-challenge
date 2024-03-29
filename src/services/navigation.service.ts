import {
  DrawerActions,
  NavigationContainerRef,
} from '@react-navigation/native';
import _ from 'lodash';
import React from 'react';

let isReady = false;
export const onNavigationReady = (): void => {
  isReady = true;
};
export const navigationRef = React.createRef<NavigationContainerRef>();

export class NavigationService {
  static getCurrentRoute = (): string => {
    const getCurrentRouteFn = _.get(
      navigationRef,
      'navigationRef.current.getCurrentRoute',
    );
    return _.isFunction(getCurrentRouteFn) ? getCurrentRouteFn().name : '';
  };

  static goBack = (): void => {
    if (isReady && navigationRef.current) {
      navigationRef.current.goBack();
    }
  };

  static navigate = (
    name: string,
    params?: Record<string, unknown> | undefined,
  ): void => {
    if (isReady && navigationRef.current) {
      // Perform navigation if the app has mounted
      navigationRef.current.navigate(name, params);
    } else {
      // You can decide what to do if the app hasn't mounted
      // You can ignore this, or add these actions to a queue you can call later
    }
  };

  static reset = (
    name: string,
    params?: Record<string, unknown> | undefined,
  ): void => {
    if (isReady && navigationRef.current) {
      // Perform navigation if the app has mounted
      navigationRef.current.reset({
        index: 0,
        routes: [
          {
            name,
            params,
          },
        ],
      });
    } else {
      // You can decide what to do if the app hasn't mounted
      // You can ignore this, or add these actions to a queue you can call later
    }
  };

  static toggleDrawer = (): void => {
    if (isReady && navigationRef.current) {
      navigationRef.current.dispatch(DrawerActions.toggleDrawer());
    }
  };
}
