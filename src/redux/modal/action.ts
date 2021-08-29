import { LoadingOverlayModalDataType, ModalActionType } from './constants';

export const toggleLoadingOverlayModalAction = (
  data: LoadingOverlayModalDataType,
): ModalActionType<LoadingOverlayModalDataType> => ({
  type: 'TOGGLE_LOADING_OVERLAY',
  payload: { data },
});
