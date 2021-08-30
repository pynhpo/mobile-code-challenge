import { KeyboardAvoidingScrollView } from '@components/keyboard-avoiding-scroll-view.component';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import { TextInput } from '@components/text-input.component';
import { Button } from '@components/button.component';
import { Layout } from '@components/layout.component';
import { BackHeader } from '@components/header.component';
import { Text } from '@components/text.component';
import { CurrencyView } from '@components/currency.component';
import { appStyles } from 'theme/globalStyles';
import SpendingLimitOutlineSvg from '@assets/svg/spending-limit-outline.svg';
import { NumberService } from '@services/number.service';
import { useSelector } from 'react-redux';
import { selectDebitCardInfo } from '@redux/debit-card/selector';
import { FetcherService } from '@services/fetcher.service';
import { UrlConstant } from '@constants/url.constant';
import { updateWeeklySpendingLimitAction } from '@redux/debit-card/action';

const LimitButton = ({
  value,
  onPress,
  currency,
}: {
  value: number;
  onPress: (value: number) => void;
  currency: string;
}): React.ReactElement => {
  return (
    <TouchableOpacity
      onPress={() => onPress(value)}
      style={styles.limitButtonCover}>
      <Text style={appStyles.primaryText} category="p3">
        {NumberService.formatMoney(value, currency)}
      </Text>
    </TouchableOpacity>
  );
};

export const SpendingLimitScreen = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const debitCardInfo = useSelector(selectDebitCardInfo);
  const [limit, setLimit] = useState<string>(
    NumberService.formatMoneyWithoutCurrency(debitCardInfo.weeklySpendingLimit),
  );
  const [limitDataSuggestions, setLimitDataSuggestions] = useState<number[]>(
    [],
  );

  useEffect(() => {
    FetcherService.fetch(
      'get',
      UrlConstant.WEEKLY_SPENDING_LIMIT_SUGGESTIONS,
    ).then((res) => {
      setLimitDataSuggestions(res);
    });
  }, []);

  const onSubmit = () => {
    if (!limit) {
      return;
    }
    dispatch(
      updateWeeklySpendingLimitAction({
        _id: debitCardInfo._id,
        limit: NumberService.getValue(limit) || 0,
      }),
    );
  };

  return (
    <Layout style={styles.container}>
      <View style={styles.headerCover}>
        <BackHeader />
        <Text style={styles.headerTitle} category="h1">
          {t<string>('screens.spending_limit.header_title')}
        </Text>
      </View>
      <View style={styles.bodyCover}>
        <KeyboardAvoidingScrollView contentContainerStyle={appStyles.flex1}>
          <View style={styles.body}>
            <View style={styles.labelCover}>
              <SpendingLimitOutlineSvg />
              <Text style={appStyles.marginLeft12} category="label2">
                {t<string>('screens.spending_limit.label')}
              </Text>
            </View>
            <TextInput
              size="large"
              leftComponent={<CurrencyView />}
              autoCapitalize="none"
              value={limit}
              keyboardType="numeric"
              onChangeText={(text: string) => {
                setLimit(text);
                NumberService.debouncedFormat(() =>
                  setLimit(NumberService.formatPositiveMoney(text)),
                );
              }}
              onSubmitEditing={onSubmit}
            />
            <Text style={styles.caption} category="p2">
              {t<string>('screens.spending_limit.caption')}
            </Text>
            <View style={styles.suggestions}>
              {limitDataSuggestions.map((item, index) => {
                return (
                  <LimitButton
                    key={index}
                    value={item}
                    currency={debitCardInfo.currency}
                    onPress={(value: number) =>
                      setLimit(NumberService.formatPositiveMoney(value))
                    }
                  />
                );
              })}
            </View>
          </View>
          <Button
            disabled={!limit}
            style={styles.saveButton}
            onPress={onSubmit}>
            {t<string>('screens.spending_limit.save')}
          </Button>
        </KeyboardAvoidingScrollView>
        <View style={styles.whiteGap} />
      </View>
    </Layout>
  );
};
