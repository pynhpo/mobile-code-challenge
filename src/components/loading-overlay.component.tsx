import { toggleLoadingOverlayModalAction } from '@redux/modal/action';
import { selectLoadingOverlay } from '@redux/modal/selector';
import React, { useEffect } from 'react';
import {
  StyleSheet,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from './text.component';
import { colors } from '@theme/colors';

type SizeType = 'small' | 'large';

export interface LoadingOverlayProps extends ViewProps {
  cancelable?: boolean;
  color?: string;
  size?: SizeType;
  textContent?: string;
  textStyle?: TextStyle;
  indicatorStyle?: ViewStyle;
  customIndicator?: React.ReactElement | null;
  children?: React.ReactElement | null;
  spinnerKey?: string;
  autoCloseTime?: number;
  autoClose?: boolean;
}

const defaultProps: LoadingOverlayProps = {
  cancelable: true,
  color: colors.primary,
  size: 'small',
  textContent: '',
  textStyle: {},
  indicatorStyle: {},
  customIndicator: null,
  spinnerKey: '',
  children: null,
  autoCloseTime: 15000,
  autoClose: true,
};

export const LoadingOverlay = (
  props: LoadingOverlayProps,
): React.ReactElement => {
  const {
    cancelable,
    textContent,
    spinnerKey,
    children,
    customIndicator,
    size,
    color,
    indicatorStyle,
    textStyle,
    autoCloseTime,
    autoClose,
  } = {
    ...defaultProps,
    ...props,
  };

  const dispatch = useDispatch();
  const loadingOverlay = useSelector(selectLoadingOverlay);
  useEffect(() => {
    if (loadingOverlay.visible && autoClose) {
      handleAutoClose();
    }
  }, [loadingOverlay.visible]);

  const handleAutoClose = () => {
    if (autoCloseTime !== 0) {
      setTimeout(() => {
        dispatch(toggleLoadingOverlayModalAction({ visible: false }));
      }, autoCloseTime);
    }
  };
  const handleOnRequestClose = () => {
    if (cancelable) {
      dispatch(toggleLoadingOverlayModalAction({ visible: false }));
    }
  };
  const renderDefaultContent = () => {
    return (
      <View style={styles.background}>
        {customIndicator ? (
          customIndicator
        ) : (
          <ActivityIndicator size={size} color={color} style={indicatorStyle} />
        )}
        <View style={[styles.textContainer, indicatorStyle]}>
          <Text style={[styles.textContent, textStyle]}>{textContent}</Text>
        </View>
      </View>
    );
  };
  return (
    <Modal
      isVisible={loadingOverlay.visible}
      statusBarTranslucent={true}
      useNativeDriverForBackdrop={true}
      useNativeDriver={true}
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationOutTiming={loadingOverlay.animationOut ? undefined : 0}
      style={styles.modal}
      onBackButtonPress={handleOnRequestClose}>
      <View
        style={styles.container}
        key={spinnerKey ? spinnerKey : `spinner_${Date.now()}`}>
        {children ? children : renderDefaultContent()}
      </View>
    </Modal>
  );
};

const transparent = 'transparent';
const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  container: {
    backgroundColor: transparent,
    bottom: 0,
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  textContainer: {
    alignItems: 'center',
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  textContent: {
    fontSize: 20,
    fontWeight: 'bold',
    height: 50,
    top: 80,
  },
});
