import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Text } from './text.component';
import { colors } from '@theme/colors';
import { useTranslation } from 'react-i18next';
import { appStyles } from '@theme/globalStyles';
import { NumberService } from '@services/number.service';

interface PropsType extends ViewProps {
  currentValue: number;
  limit: number;
  currency: string;
}

export const DebitCardSpendingLimitProcessingBar = (
  props: PropsType,
): React.ReactElement => {
  const { t } = useTranslation();
  const { currentValue, limit, currency, style, ...restProps } = props;
  const currentPercent = (currentValue * 100) / limit;
  return (
    <View {...restProps} style={style}>
      <View style={styles.labelCover}>
        <Text category="p1">
          {t<string>(
            'components.debit_card_spending_limit_processing_bar.label',
          )}
        </Text>
        <View style={styles.ratioCover}>
          <Text category="p1" style={appStyles.primaryText}>
            {NumberService.formatMoney(currentValue, currency)}
          </Text>
          <View style={styles.gap} />
          <Text style={styles.limitText} category="p1">
            {NumberService.formatMoney(limit, currency)}
          </Text>
        </View>
      </View>
      <View style={styles.processingBarCover}>
        <View
          style={[
            styles.currentProcess,
            { width: currentPercent > 100 ? '100%' : currentPercent + '%' },
          ]}
        />
        <View
          style={[
            styles.nut,
            { left: currentPercent > 100 ? '100%' : currentPercent + '%' },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelCover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  ratioCover: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gap: {
    height: 19,
    width: 1,
    backgroundColor: colors.lightGray,
    marginHorizontal: 4,
  },
  processingBarCover: {
    height: 15,
    borderRadius: 30,
    backgroundColor: colors.lightGreen,
    overflow: 'hidden',
  },
  currentProcess: {
    backgroundColor: colors.primary,
    height: '100%',
    position: 'absolute',
    left: 0,
  },
  nut: {
    backgroundColor: colors.primary,
    height: 40,
    width: 10,
    transform: [{ rotate: '25deg' }],
    position: 'absolute',
    top: -20,
  },
  limitText: {
    color: colors.lightGray,
  },
});
