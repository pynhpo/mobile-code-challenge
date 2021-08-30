import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { Text } from './text.component';
import { colors } from '@theme/colors';
import ToggleSwitch from 'toggle-switch-react-native';
import { appStyles } from '@theme/globalStyles';

export type DebitCardItemDataType = {
  key: string;
  label: string;
  text: string;
};

interface PropsType extends TouchableOpacityProps {
  isOn?: boolean;
  onToggle?: (isOn: boolean) => void;
  showToggle?: boolean;
  icon: React.ReactElement;
  item: DebitCardItemDataType;
}

export const DebitCardItem = (props: PropsType): React.ReactElement => {
  const {
    isOn,
    style,
    onToggle = () => {},
    showToggle,
    icon,
    item,
    ...restProps
  } = props;
  return (
    <TouchableOpacity
      {...restProps}
      activeOpacity={0.7}
      style={[styles.container, style]}>
      <View style={styles.iconCover}>{icon}</View>
      <View style={appStyles.flex1}>
        <Text
          category="label2"
          numberOfLines={1}
          style={appStyles.marginBottom4}>
          {item.label}
        </Text>
        <Text category="p2" numberOfLines={1}>
          {item.text}
        </Text>
      </View>
      <View style={styles.toggleButtonCover}>
        {showToggle ? (
          <ToggleSwitch
            isOn={isOn}
            onColor={colors.primary}
            offColor={colors.disabledButton}
            onToggle={onToggle}
          />
        ) : (
          <View />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  iconCover: {
    marginRight: 12,
  },
  toggleButtonCover: {
    width: 46,
  },
});
