import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View, FlatList, ListRenderItem } from 'react-native';
import { styles } from './styles';
import { Layout } from '@components/layout.component';
import { Text } from '@components/text.component';
import { appStyles } from '@theme/globalStyles';
import { CurrencyView } from '@components/currency.component';
import { VisaCard } from '@components/visa-card.component';
import TopUpSvg from '@assets/svg/top-up.svg';
import SpendingLimitSvg from '@assets/svg/spending-limit.svg';
import FreezeCardSvg from '@assets/svg/freeze-card.svg';
import NewCardSvg from '@assets/svg/new-card.svg';
import DeactivatedCardsSvg from '@assets/svg/deactivated-cards.svg';
import {
  DebitCardItemDataType,
  DebitCardItem,
} from '@components/debit-card-item.component';
import { DebitCardSpendingLimitProcessingBar } from '@components/debit-card-spending-limit-processing-bar';
import { NavigationService } from '@services/navigation.service';
import { TitleHeader } from '@components/header.component';
import { FetcherService } from '@services/fetcher.service';
import { UrlConstant } from '@constants/url.constant';
import { useDispatch, useSelector } from 'react-redux';
import { selectDebitCardInfo } from '@redux/debit-card/selector';
import { toggleWeeklySpendingLimitAction } from '@redux/debit-card/action';
import { NumberService } from '@services/number.service';

export const DebitCardScreen = (): React.ReactElement => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [debitCardActions, setDebitCardActions] = useState<
    DebitCardItemDataType[]
  >([]);
  const debitCardInfo = useSelector(selectDebitCardInfo);

  useEffect(() => {
    FetcherService.fetch('get', UrlConstant.DEBIT_CARD_ACTIONS).then((res) => {
      setDebitCardActions(res);
    });
  }, []);

  const onToggleWeeklySpendingLimit = () => {
    dispatch(
      toggleWeeklySpendingLimitAction({
        isOn: !debitCardInfo.isOnWeeklySpendingLimit,
        _id: debitCardInfo._id,
      }),
    );
  };

  const renderItem: ListRenderItem<DebitCardItemDataType> = ({ item }) => {
    switch (item.key) {
      case 'top_up_account':
        return (
          <DebitCardItem
            style={styles.itemsSection}
            icon={<TopUpSvg />}
            item={item}
          />
        );
      case 'weekly_spending_limit':
        return (
          <DebitCardItem
            style={styles.itemsSection}
            isOn={debitCardInfo.isOnWeeklySpendingLimit}
            showToggle
            onToggle={onToggleWeeklySpendingLimit}
            onPress={() => {
              NavigationService.navigate('SpendingLimit');
            }}
            icon={<SpendingLimitSvg />}
            item={item}
          />
        );
      case 'freeze_card':
        return (
          <DebitCardItem
            style={styles.itemsSection}
            isOn={false}
            showToggle
            icon={<FreezeCardSvg />}
            item={item}
          />
        );
      case 'get_a_new_card':
        return (
          <DebitCardItem
            style={styles.itemsSection}
            icon={<NewCardSvg />}
            item={item}
          />
        );
      case 'deactivated_cards':
        return (
          <DebitCardItem
            style={styles.itemsSection}
            icon={<DeactivatedCardsSvg />}
            item={item}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Layout useSafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.banner}>
        <TitleHeader title={t<string>('screens.debit_card.header_title')} />
        <View style={styles.availableBalanceCover}>
          <Text style={appStyles.whiteText} category="label2">
            {t<string>('screens.debit_card.available_balance')}
          </Text>
          <View style={styles.availableBalanceValueCover}>
            <CurrencyView style={appStyles.marginRight10} />
            <Text category="h1">
              {NumberService.formatMoneyWithoutCurrency(
                debitCardInfo.availableBalance,
              )}
            </Text>
          </View>
        </View>
      </View>
      <FlatList
        style={appStyles.transparentBackground}
        keyExtractor={(item, index) => `${item.key}_${index}`}
        bounces={false}
        showsVerticalScrollIndicator={false}
        data={debitCardActions}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <VisaCard
              data={{
                name: debitCardInfo.ownerName,
                cardNumber: debitCardInfo.cardNumber,
                expireDate: debitCardInfo.expireDate,
                cvv: debitCardInfo.cvv,
              }}
              style={styles.visaCard}
            />
            {debitCardInfo.isOnWeeklySpendingLimit && (
              <DebitCardSpendingLimitProcessingBar
                currentValue={debitCardInfo.currentWeeklySpendingValue}
                limit={debitCardInfo.weeklySpendingLimit}
                currency={debitCardInfo.currency}
                style={styles.processingBar}
              />
            )}
            <View style={styles.bottomGapOfListHeader} />
          </View>
        }
      />
    </Layout>
  );
};
