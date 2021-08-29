import {
  initialModalState,
  ModalStateType,
  ModalActionType,
  LoadingOverlayModalDataType,
} from './constants';

export function modalReducer(
  state = initialModalState,
  action: ModalActionType<LoadingOverlayModalDataType>,
): ModalStateType {
  switch (action.type) {
    case 'TOGGLE_LOADING_OVERLAY':
      const loadingOverlayData = action?.payload?.data;
      return loadingOverlayData
        ? {
            ...state,
            loadingOverlay: loadingOverlayData,
          }
        : state;
    default:
      return state;
  }
}
