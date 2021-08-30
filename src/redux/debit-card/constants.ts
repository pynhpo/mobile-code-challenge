import { ResolverType } from '@services/hooks.services';

export type DebitCardConstantsType =
  | 'GET_DEBIT_CARD_INFO'
  | 'SET_DEBIT_CARD_INFO'
  | 'TOGGLE_WEEKLY_SPENDING_LIMIT'
  | 'UPDATE_WEEKLY_SPENDING_LIMIT';

export type DebitCardDataType = {
  _id: string;
  ownerName: string;
  cardNumber: string;
  expireDate: string;
  cvv: string;
  currentWeeklySpendingValue: number;
  isOnWeeklySpendingLimit: boolean;
  weeklySpendingLimit: number;
  availableBalance: number;
  currency: string;
};

export type ToggleWeeklySpendingLimitDataType = {
  isOn: boolean;
  _id: string;
};

export type UpdateWeeklySpendingLimitDataType = {
  limit: number;
  _id: string;
};

export const initialDebitCardInfo: DebitCardDataType = {
  _id: '',
  ownerName: '',
  cardNumber: '1111111111111111',
  expireDate: '',
  cvv: '',
  currentWeeklySpendingValue: 0,
  isOnWeeklySpendingLimit: false,
  weeklySpendingLimit: 0,
  availableBalance: 0,
  currency: 'S$',
};

export interface DebitCardActionType<T = undefined> extends ResolverType {
  type: DebitCardConstantsType;
  payload?: {
    data: T;
  };
}

export type DebitCardStateType = {
  debitCardInfo: DebitCardDataType;
};

export const initialDebitCardState: DebitCardStateType = {
  debitCardInfo: initialDebitCardInfo,
};
