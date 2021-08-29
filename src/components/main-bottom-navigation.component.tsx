import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useCallback } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { colors } from '@theme/colors';
import { Text } from '@components/text.component';

export const MainBottomNavigation = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps): React.ReactElement => {
  const onPress = useCallback(
    (route, isFocused) => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    },
    [descriptors, navigation],
  );

  return (
    <SafeAreaView edges={['bottom']} style={styles.safeView}>
      <View style={styles.bottomTabContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.title || route.name;
          const isFocused = state.index === index;

          return (
            <Pressable
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={() => onPress(route, isFocused)}
              style={styles.bottomTabButton}>
              <View style={styles.iconContainer}>
                {options?.tabBarIcon &&
                  options?.tabBarIcon({
                    focused: isFocused,
                    size: 24,
                    color: isFocused ? colors.primary : colors.inactiveTab,
                  })}
              </View>
              <Text
                category={isFocused ? 'c1' : 'c2'}
                style={{
                  color: isFocused ? colors.primary : colors.inactiveTab,
                }}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: colors.white,
  },
  bottomTabContainer: {
    flexDirection: 'row',
    minHeight: 56,
    alignItems: 'center',
  },
  bottomTabButton: {
    flex: 1,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 4,
    minHeight: 24,
  },
});
