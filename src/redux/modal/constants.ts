export type ModalConstantsType = 'TOGGLE_LOADING_OVERLAY';

export type ModalActionType<T = undefined> = {
  type: ModalConstantsType;
  payload?: {
    data: T;
  };
};

export type LoadingOverlayModalDataType = {
  visible: boolean;
  animationOut?: boolean;
};

export const initialLoadingOverlay: LoadingOverlayModalDataType = {
  visible: false,
  animationOut: true,
};

export type ModalStateType = {
  loadingOverlay: LoadingOverlayModalDataType;
};

export const initialModalState: ModalStateType = {
  loadingOverlay: initialLoadingOverlay,
};
