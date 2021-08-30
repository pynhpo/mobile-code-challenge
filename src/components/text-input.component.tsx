import React, { useState, useCallback, forwardRef } from 'react';
import {
  StyleSheet,
  View,
  TextInput as RNTextInput,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ViewStyle,
} from 'react-native';
import { colors } from '@theme/colors';
import isFunction from 'lodash/isFunction';

type SizeType = 'small' | 'medium' | 'large';

interface PropsType extends TextInputProps {
  size?: SizeType;
  containerStyle?: ViewStyle;
  leftComponent?: React.ReactElement;
  error?: string;
}

const getDefaultStyle = (size: SizeType) => {
  switch (size) {
    case 'small':
      return styles.small;
    case 'medium':
      return styles.medium;
    case 'large':
      return styles.large;
    default:
      return styles.small;
  }
};

const getOnFocusStyle = (isFocused: boolean) => {
  if (isFocused) {
    return styles.focused;
  }
  return styles.blur;
};

const Input = (
  props: PropsType,
  ref: React.LegacyRef<RNTextInput> | undefined,
): React.ReactElement => {
  const {
    leftComponent,
    size = 'medium',
    style,
    containerStyle,
    onBlur,
    onFocus,
    error,
    ...restProps
  } = props;
  const [focused, setFocused] = useState(!!restProps.autoFocus);
  const onCustomBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      isFunction(onBlur) && onBlur(e);
      setFocused(false);
    },
    [onBlur, setFocused],
  );
  const onCustomFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      isFunction(onFocus) && onFocus(e);
      setFocused(true);
    },
    [onBlur, setFocused],
  );
  const defaultStyle = getDefaultStyle(size);
  const focusedStyle = getOnFocusStyle(focused);
  const errorStyle = error ? styles.error : undefined;
  return (
    <View style={[styles.container, containerStyle, focusedStyle, errorStyle]}>
      {leftComponent ? (
        <View style={styles.leftComponentCover}>{leftComponent}</View>
      ) : null}
      <RNTextInput
        {...restProps}
        ref={ref}
        placeholderTextColor={colors.gray}
        style={[defaultStyle, style]}
        onBlur={onCustomBlur}
        onFocus={onCustomFocus}
      />
    </View>
  );
};

export const TextInput = forwardRef(Input);

const sharedStyles = StyleSheet.create({
  textInput: {
    color: colors.inputTextColor,
    flex: 1,
  },
});
const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftComponentCover: {
    marginRight: 10,
  },
  error: {
    borderBottomColor: colors.red,
  },
  focused: {
    borderBottomColor: colors.primary,
  },
  blur: {
    borderBottomColor: colors.lightGray,
  },
  small: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 13,
    fontWeight: '400',
    height: 50,
    ...sharedStyles.textInput,
  },
  medium: {
    fontFamily: 'AvenirNextLTPro-Medium',
    fontSize: 18,
    fontWeight: '500',
    height: 50,
    ...sharedStyles.textInput,
  },
  large: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 24,
    fontWeight: '700',
    height: 50,
    ...sharedStyles.textInput,
  },
});
