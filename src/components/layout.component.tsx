import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { colors } from '@theme/colors';
import {
  SafeAreaView,
  SafeAreaViewProps,
  Edge,
} from 'react-native-safe-area-context';

type LevelType = 1 | 2;

interface PropsType extends ViewProps, SafeAreaViewProps {
  level?: LevelType;
  useSafeAreaView?: boolean;
  edges?: Edge[];
  mode?: 'padding' | 'margin';
}

const getDefaultStyle = (level: LevelType) => {
  switch (level) {
    case 1:
      return styles.level1;
    case 2:
      return styles.level2;
    default:
      return styles.level1;
  }
};

export const Layout = (props: PropsType): React.ReactElement => {
  const {
    level = 1,
    useSafeAreaView = false,
    mode,
    edges,
    style,
    ...restProps
  } = props;
  const defaultStyle = getDefaultStyle(level);
  return !useSafeAreaView ? (
    <View {...restProps} style={[defaultStyle, style]} />
  ) : (
    <SafeAreaView
      mode={mode}
      edges={edges}
      {...restProps}
      style={[defaultStyle, style]}
    />
  );
};

const styles = StyleSheet.create({
  level1: {
    backgroundColor: colors.layoutLevel1,
  },
  level2: {
    backgroundColor: colors.layoutLevel2,
  },
});
