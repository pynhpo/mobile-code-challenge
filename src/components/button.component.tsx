import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { Text } from './text.component';
import { colors } from '@theme/colors';

interface PropsType extends TouchableOpacityProps {
  children: string;
}

const getDefaultStyle = (disabled: boolean | null | undefined) => {
  return disabled ? styles.disabled : undefined;
};

export const Button = (props: PropsType): React.ReactElement => {
  const { children, style, disabled, ...restProps } = props;
  const defaultStyle = getDefaultStyle(disabled);
  return (
    <TouchableOpacity
      disabled={disabled}
      {...restProps}
      style={[styles.container, defaultStyle, style]}>
      <Text category="h4">{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    width: 300,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0000001F',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: colors.primary,
  },
  disabled: {
    backgroundColor: colors.disabledButton,
  },
});
