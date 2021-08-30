import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ViewProps,
  ViewStyle,
} from 'react-native';

export interface KeyboardAwareScrollViewProps extends ViewProps {
  bounces?: boolean;
  children: React.ReactNode;
  contentContainerStyle?: ViewStyle;
}

const defaultProps: KeyboardAwareScrollViewProps = {
  bounces: false,
  children: null,
  contentContainerStyle: {},
};

export const KeyboardAvoidingScrollView = (
  props: KeyboardAwareScrollViewProps,
): React.ReactElement => {
  const { bounces, children, contentContainerStyle } = {
    ...defaultProps,
    ...props,
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        bounces={bounces}
        style={{ flex: 1 }}
        contentContainerStyle={contentContainerStyle}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
