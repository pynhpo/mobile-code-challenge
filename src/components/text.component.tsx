import React from 'react';
import { StyleSheet, TextProps, Text as RNText } from 'react-native';
import { colors } from '@theme/colors';

type ChildElement = React.ReactText | TextElement;
type TextElement = React.ReactElement<TextProps>;
interface CategoryStyleType {
  category?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'label1'
    | 'label2'
    | 'p1'
    | 'p2'
    | 'p3'
    | 'p4'
    | 'c1'
    | 'c2';
}

interface FontWeightStyleType {
  fontWeight?: 'bold' | 'semi-bold' | 'medium' | 'regular'; // Note: AvenirNextLTPro-Demi is semi-bold
}

interface PropsType extends TextProps, CategoryStyleType, FontWeightStyleType {
  children?: ChildElement | ChildElement[];
}

const getTextCategoryStyle = ({ category }: Required<CategoryStyleType>) => {
  switch (category) {
    case 'h1':
      return styles.h1;
    case 'h2':
      return styles.h2;
    case 'h3':
      return styles.h3;
    case 'h4':
      return styles.h4;
    case 'label1':
      return styles.label1;
    case 'label2':
      return styles.label2;
    case 'p1':
      return styles.p1;
    case 'p2':
      return styles.p2;
    case 'p3':
      return styles.p3;
    case 'p4':
      return styles.p4;
    case 'c1':
      return styles.c1;
    case 'c2':
      return styles.c2;
    default:
      return styles.p2;
  }
};

const getTextFontWeightStyle = ({
  fontWeight,
}: Required<FontWeightStyleType>) => {
  switch (fontWeight) {
    case 'bold':
      return styles.bold;
    case 'semi-bold':
      return styles.semiBold;
    case 'medium':
      return styles.medium;
    case 'regular':
      return styles.regular;
    default:
      return styles.regular;
  }
};

const getDefaultStyle = ({
  category,
  fontWeight,
}: Required<CategoryStyleType> & FontWeightStyleType) => {
  const textFontWeightStyle = fontWeight
    ? getTextFontWeightStyle({ fontWeight })
    : {};
  return {
    ...getTextCategoryStyle({ category }),
    ...textFontWeightStyle,
  };
};

export const Text = (props: PropsType): React.ReactElement => {
  const { children, category = 'p1', fontWeight, style, ...restProps } = props;
  const defaultStyle = getDefaultStyle({ category, fontWeight });
  return (
    <RNText {...restProps} style={[defaultStyle, style]}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 24,
    fontWeight: '700',
    color: colors.white,
  },
  h2: {
    fontFamily: 'AvenirNextLTPro-Demi',
    fontSize: 24,
    fontWeight: '600',
    color: colors.white,
  },
  h3: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 22,
    fontWeight: '700',
    color: colors.white,
  },
  h4: {
    fontFamily: 'AvenirNextLTPro-Demi',
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
  label1: {
    fontFamily: 'AvenirNextLTPro-Demi',
    fontSize: 14,
    fontWeight: '600',
    color: colors.defaultLabel1,
  },
  label2: {
    fontFamily: 'AvenirNextLTPro-Medium',
    fontSize: 14,
    fontWeight: '500',
    color: colors.defaultLabel2,
  },
  p1: {
    fontFamily: 'AvenirNextLTPro-Demi',
    fontSize: 13,
    fontWeight: '600',
    color: colors.pTextColor,
  },
  p2: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 13,
    fontWeight: '400',
    color: colors.pTextColor,
  },
  p3: {
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 12,
    fontWeight: '700',
    color: colors.pTextColor,
  },
  p4: {
    fontFamily: 'AvenirNextLTPro-Demi',
    fontSize: 12,
    fontWeight: '600',
    color: colors.pTextColor,
  },
  c1: {
    fontFamily: 'AvenirNextLTPro-Demi',
    fontSize: 9,
    fontWeight: '600',
  },
  c2: {
    fontFamily: 'AvenirNextLTPro-Medium',
    fontSize: 9,
    fontWeight: '500',
  },
  bold: {
    fontWeight: '700',
  },
  semiBold: {
    fontWeight: '600',
  },
  medium: {
    fontWeight: '500',
  },
  regular: {
    fontWeight: '400',
  },
});
