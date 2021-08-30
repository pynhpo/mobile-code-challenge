import { StyleSheet } from 'react-native';
import { colors } from '@theme/colors';
import { spacing } from '@theme/spacing';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerCover: {
    minHeight: 190,
    backgroundColor: colors.secondary,
  },
  headerTitle: {
    paddingHorizontal: spacing.screenPadding,
  },
  bodyCover: {
    backgroundColor: colors.white,
    flex: 1,
  },
  body: {
    flex: 1,
    padding: spacing.screenPadding,
  },
  labelCover: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -18,
  },
  caption: {
    marginTop: 12,
    marginBottom: 32,
    color: colors.lightGray,
  },
  limitButtonCover: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 106,
    minHeight: 40,
    backgroundColor: colors.lightGreen,
    marginVertical: 4,
    borderRadius: 4,
    overflow: 'hidden',
  },
  suggestions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  saveButton: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  whiteGap: {
    position: 'absolute',
    top: -24,
    width: '100%',
    height: 80,
    borderRadius: 24,
    backgroundColor: colors.white,
    zIndex: -1,
  },
});
