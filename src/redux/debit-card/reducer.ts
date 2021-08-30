import {
  initialDebitCardState,
  DebitCardActionType,
  DebitCardStateType,
  DebitCardDataType,
} from './constants';

export function debitCardReducer(
  state = initialDebitCardState,
  action: DebitCardActionType<DebitCardDataType>,
): DebitCardStateType {
  switch (action.type) {
    case 'SET_DEBIT_CARD_INFO':
      const debitCardData = action?.payload?.data;
      return debitCardData
        ? {
            ...state,
            debitCardInfo: debitCardData,
          }
        : state;
    default:
      return state;
  }
}
