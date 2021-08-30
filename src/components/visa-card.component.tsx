import React, { useState } from 'react';
import { StyleSheet, View, ViewProps, TouchableOpacity } from 'react-native';
import { Text } from './text.component';
import { colors } from '@theme/colors';
import { spacing } from '@theme/spacing';
import { appStyles } from '@theme/globalStyles';
import AspireLogoSvg from '@assets/svg/aspire-logo.svg';
import VisaLogoSvg from '@assets/svg/visa-logo.svg';
import ClosedEyeSvg from '@assets/svg/closed-eye.svg';
import OpenedEyeSvg from '@assets/svg/opened-eye.svg';
import { useTranslation } from 'react-i18next';
import { MinorService } from '@services/minor.service';

interface PropsType extends ViewProps {
  data: {
    name: string;
    cardNumber: string;
    expireDate: string;
    cvv: string;
  };
}

export const VisaCard = (props: PropsType): React.ReactElement => {
  const { t } = useTranslation();
  const [visibleCardNumber, setVisibleCardNumber] = useState(false);
  const { style, data, ...restProps } = props;
  const toggleVisibleCardNumber = () => {
    setVisibleCardNumber(!visibleCardNumber);
  };

  const formattedCardNumber = MinorService.getFormattedCardNumber(
    data.cardNumber.trim(),
  );
  const last4CharsOfCardNumber = MinorService.get4LastCharsOfCardNumber(
    data.cardNumber.trim(),
  );

  return (
    <View {...restProps} style={[styles.container, style]}>
      <View style={styles.body}>
        <View style={styles.aspireLogoCover}>
          <AspireLogoSvg />
        </View>
        <Text numberOfLines={1} category="h3" style={appStyles.marginBottom24}>
          {data.name}
        </Text>
        <Text numberOfLines={1} category="label1" style={styles.cardNumber}>
          {visibleCardNumber ? (
            formattedCardNumber
          ) : (
            <Text numberOfLines={1} category="label1" style={styles.cardNumber}>
              <Text
                numberOfLines={1}
                category="label1"
                style={[styles.cardNumber]}>
                &#x2022; &#x2022; &#x2022; &#x2022;{`  `}
                &#x2022; &#x2022; &#x2022; &#x2022;{`  `}
                &#x2022; &#x2022; &#x2022; &#x2022;{`  `}
              </Text>
              <Text
                numberOfLines={1}
                category="label1"
                style={[styles.cardNumber]}>
                {last4CharsOfCardNumber}
              </Text>
            </Text>
          )}
        </Text>
        <View style={styles.cvvCover}>
          <Text numberOfLines={1} category="p1" style={styles.expireDate}>
            {`${t<string>('components.visa_card.thru')}: ${data.expireDate}`}
          </Text>
          <Text numberOfLines={1} category="p1" style={appStyles.whiteText}>
            <Text
              numberOfLines={1}
              category="p1"
              style={appStyles.whiteText}>{`${t<string>(
              'components.visa_card.cvv',
            )}: `}</Text>
            {visibleCardNumber ? (
              data.cvv
            ) : (
              <Text numberOfLines={1} category="p1" style={appStyles.whiteText}>
                &#x2605;&#x2605;&#x2605;
              </Text>
            )}
          </Text>
        </View>
        <View style={styles.visaLogoCover}>
          <VisaLogoSvg />
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.toggleCardNumberCover}
        onPress={toggleVisibleCardNumber}>
        {visibleCardNumber ? <ClosedEyeSvg /> : <OpenedEyeSvg />}
        <Text
          numberOfLines={1}
          category="p4"
          style={styles.visibleCardNumberText}>
          {visibleCardNumber
            ? t<string>('components.visa_card.hide_card_number')
            : t<string>('components.visa_card.show_card_number')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 250,
    justifyContent: 'flex-end',
  },
  body: {
    height: 220,
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: spacing.screenPadding,
  },
  aspireLogoCover: {
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  cvvCover: {
    marginBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  expireDate: {
    marginRight: 32,
    color: colors.white,
  },
  visaLogoCover: {
    alignItems: 'flex-end',
  },
  toggleCardNumberCover: {
    width: 158,
    height: 44,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: colors.white,
    zIndex: -1,
    borderRadius: 6,
    paddingTop: 8,
  },
  visibleCardNumberText: {
    color: colors.primary,
    marginLeft: 6,
  },
  cardNumber: {
    marginBottom: 16,
    letterSpacing: 3.5,
    height: 18,
  },
});
