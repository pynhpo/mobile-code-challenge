import { CombinedStateType } from '@init/reducer';
import { createSelector } from 'reselect';
import { DebitCardStateType, initialDebitCardState } from './constants';

export const makeSelectDebitCardDomain = (
  state: CombinedStateType,
): DebitCardStateType => state.debitCard || initialDebitCardState;

export const selectDebitCardInfo = createSelector(
  makeSelectDebitCardDomain,
  (debitCard) => debitCard.debitCardInfo,
);

export const selectWeeklySpendingLimit = createSelector(
  makeSelectDebitCardDomain,
  (debitCard) => debitCard.debitCardInfo.weeklySpendingLimit,
);

export const selectCurrencyOfDebitCard = createSelector(
  makeSelectDebitCardDomain,
  (debitCard) => debitCard.debitCardInfo.currency,
);
