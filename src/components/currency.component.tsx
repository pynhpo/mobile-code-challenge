import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Text } from './text.component';
import { colors } from '@theme/colors';
import { appStyles } from '@theme/globalStyles';

export const CurrencyView = (props: ViewProps): React.ReactElement => {
  const { style, ...restProps } = props;
  return (
    <View {...restProps} style={[styles.container, style]}>
      <Text category="p3" style={appStyles.whiteText}>
        S$
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 22,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});
