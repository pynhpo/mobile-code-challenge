import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, FlatList, ListRenderItem } from 'react-native';
import { styles } from './styles';
import { Layout } from '@components/layout.component';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from '@components/text.component';
import LogoSvg from '@assets/svg/logo.svg';
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

const data: DebitCardItemDataType[] = [
  {
    key: 'top_up_account',
    label: 'Top-up account',
    text: 'Deposit money to your account to use with card',
  },
  {
    key: 'weekly_spending_limit',
    label: 'Weekly spending limit',
    text: 'You haven’t set any spending limit on card',
  },
  {
    key: 'freeze_card',
    label: 'Freeze card',
    text: 'Your debit card is currently active',
  },
  {
    key: 'get_a_new_card',
    label: 'Get a new card',
    text: 'This deactivates your current debit card',
  },
  {
    key: 'deactivated_cards',
    label: 'Deactivated cards',
    text: 'Your previously deactivated cards',
  },
];

export const DebitCardScreen = (): React.ReactElement => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const [isOnWeeklySpendingLimit, setIsOnWeeklySpendingLimit] = useState(false);

  const onToggleWeeklySpendingLimit = (isOn: boolean) => {
    setIsOnWeeklySpendingLimit(isOn);
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
            isOn={isOnWeeklySpendingLimit}
            showToggle
            onToggle={onToggleWeeklySpendingLimit}
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
        <View style={[styles.header, { marginTop: insets.top }]}>
          <Text style={styles.headerTitle} category="h1">
            {t<string>('screens.debit_card.header_title')}
          </Text>
          <LogoSvg width="25" height="25" />
        </View>
        <View style={styles.availableBalanceCover}>
          <Text style={appStyles.whiteText} category="label2">
            {t<string>('screens.debit_card.available_balance')}
          </Text>
          <View style={styles.availableBalanceValueCover}>
            <CurrencyView style={appStyles.marginRight10} />
            <Text style={styles.headerTitle} category="h1">
              {`3,000`}
            </Text>
          </View>
        </View>
      </View>
      <FlatList
        style={appStyles.transparentBackground}
        keyExtractor={(item, index) => `${item.key}_${index}`}
        bounces={false}
        showsVerticalScrollIndicator={false}
        data={[...data, ...data, ...data, ...data, ...data]}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <VisaCard
              data={{
                name: 'Mark Henry',
                cardNumber: '1234567812341234',
                expireDate: '12/20',
                cvv: '456',
              }}
              style={styles.visaCard}
            />
            {isOnWeeklySpendingLimit && (
              <DebitCardSpendingLimitProcessingBar
                currentValue={2600}
                limit={5000}
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
