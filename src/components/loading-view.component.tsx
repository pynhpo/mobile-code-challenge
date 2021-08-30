import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { colors } from '@theme/colors';

export const LoadingView = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
