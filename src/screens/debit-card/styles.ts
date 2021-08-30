import { StyleSheet } from 'react-native';
import { colors } from '@theme/colors';
import { spacing } from '@theme/spacing';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 300,
    position: 'absolute',
    top: 0,
    backgroundColor: colors.secondary,
    zIndex: -2,
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  availableBalanceCover: {
    marginTop: 33,
    paddingHorizontal: spacing.screenPadding,
  },
  availableBalanceValueCover: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  listHeader: {
    width: '100%',
    marginTop: 188,
    marginBottom: 32,
  },
  bottomGapOfListHeader: {
    height: 1000,
    borderRadius: 24,
    backgroundColor: colors.white,
    width: '100%',
    position: 'absolute',
    top: 90,
    zIndex: -1,
  },
  visaCard: {
    marginHorizontal: spacing.screenPadding,
  },
  processingBar: {
    marginHorizontal: spacing.screenPadding,
    marginTop: 26,
  },
  itemsSection: {
    paddingBottom: 32,
    paddingHorizontal: spacing.screenPadding,
  },
});
