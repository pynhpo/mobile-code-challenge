import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { colors } from './colors';

export const rawStyles: Record<string, ViewStyle | TextStyle | ImageStyle> = {
  marginBottom2: {
    marginBottom: 2,
  },
  marginBottom4: {
    marginBottom: 4,
  },
  marginTop4: {
    marginTop: 4,
  },
  marginRight4: {
    marginRight: 4,
  },
  marginRight10: {
    marginRight: 10,
  },
  marginLeft12: {
    marginLeft: 12,
  },
  marginBottom16: {
    marginBottom: 16,
  },
  marginBottom24: {
    marginBottom: 24,
  },
  marginY8: {
    marginVertical: 8,
  },
  paddingX0: {
    paddingHorizontal: 0,
  },
  paddingX16: {
    paddingHorizontal: 16,
  },
  padding16: {
    padding: 16,
  },
  padding8: {
    padding: 8,
  },
  flex1: {
    flex: 1,
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  textLineThrough: {
    textDecorationLine: 'line-through',
  },
  transparentBackground: {
    backgroundColor: 'transparent',
  },
  centerTextAlign: {
    textAlign: 'center',
  },
  whiteText: {
    color: colors.white,
  },
  primaryText: {
    color: colors.primary,
  },
};

export const appStyles = StyleSheet.create(rawStyles);
