import {
  DebitCardActionType,
  DebitCardDataType,
  ToggleWeeklySpendingLimitDataType,
  UpdateWeeklySpendingLimitDataType,
} from './constants';

export const getDebitCardInfoAction = (): DebitCardActionType => ({
  type: 'GET_DEBIT_CARD_INFO',
});

export const setDebitCardInfoAction = (
  data: DebitCardDataType,
): DebitCardActionType<DebitCardDataType> => ({
  type: 'SET_DEBIT_CARD_INFO',
  payload: { data },
});

export const toggleWeeklySpendingLimitAction = (
  data: ToggleWeeklySpendingLimitDataType,
): DebitCardActionType<ToggleWeeklySpendingLimitDataType> => ({
  type: 'TOGGLE_WEEKLY_SPENDING_LIMIT',
  payload: { data },
});

export const updateWeeklySpendingLimitAction = (
  data: UpdateWeeklySpendingLimitDataType,
): DebitCardActionType<UpdateWeeklySpendingLimitDataType> => ({
  type: 'UPDATE_WEEKLY_SPENDING_LIMIT',
  payload: { data },
});
