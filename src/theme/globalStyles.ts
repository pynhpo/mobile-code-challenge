import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

export const rawStyles: Record<string, ViewStyle | TextStyle | ImageStyle> = {
  marginBottom4: {
    marginBottom: 4,
  },
  marginTop4: {
    marginTop: 4,
  },
  marginRight4: {
    marginRight: 4,
  },
  marginBottom16: {
    marginBottom: 16,
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
  textLineThrough: {
    textDecorationLine: 'line-through',
  },
  transparentBackground: {
    backgroundColor: 'transparent',
  },
  centerTextAlign: {
    textAlign: 'center',
  },
};

export const appStyles = StyleSheet.create(rawStyles);
