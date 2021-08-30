import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Text } from './text.component';
import { colors } from '@theme/colors';
import { appStyles } from '@theme/globalStyles';
import { useSelector } from 'react-redux';
import { selectCurrencyOfDebitCard } from '@redux/debit-card/selector';

export const CurrencyView = (props: ViewProps): React.ReactElement => {
  const { style, ...restProps } = props;
  const currency = useSelector(selectCurrencyOfDebitCard);
  return (
    <View {...restProps} style={[styles.container, style]}>
      <Text category="p3" style={appStyles.whiteText}>
        {currency}
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
