import { NavigationService } from '@services/navigation.service';
import React from 'react';
import { View, TouchableOpacity, ViewStyle, StyleSheet } from 'react-native';
import { colors } from '@theme/colors';
import { spacing } from '@theme/spacing';
import LogoSvg from '@assets/svg/logo.svg';
import LeftSvg from '@assets/svg/left.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from './text.component';

const BaseHeader = ({
  style,
  children,
  childrenContainerStyle,
}: {
  style?: ViewStyle;
  children: React.ReactNode;
  childrenContainerStyle?: ViewStyle;
}): React.ReactElement => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, style]}>
      <View
        style={{
          marginTop: insets.top,
          ...styles.childrenContainer,
          ...childrenContainerStyle,
        }}>
        {children}
      </View>
    </View>
  );
};

export const BackHeader = ({
  style,
}: {
  style?: ViewStyle;
  title?: string;
}): React.ReactElement => {
  return (
    <BaseHeader style={style}>
      <TouchableOpacity
        style={styles.backIcon}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        onPress={NavigationService.goBack}>
        <LeftSvg fill={colors.white} width={18} height={18} />
      </TouchableOpacity>
      <LogoSvg width="25" height="25" />
    </BaseHeader>
  );
};

export const TitleHeader = ({
  style,
  title,
}: {
  style?: ViewStyle;
  title: string;
}): React.ReactElement => {
  return (
    <BaseHeader style={style}>
      <Text category="h1">{title}</Text>
      <LogoSvg width="25" height="25" />
    </BaseHeader>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 0,
    width: '100%',
    zIndex: 100,
  },
  childrenContainer: {
    height: 56,
    paddingHorizontal: spacing.screenPadding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIcon: {
    width: 18,
    height: 18,
  },
});
