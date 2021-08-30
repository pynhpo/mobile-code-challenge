import { StyleSheet } from 'react-native';
import { spacing } from '@theme/spacing';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: spacing.screenPadding,
  },
  signInButton: {
    alignSelf: 'center',
    marginTop: 32,
  },
  passwordInput: {
    marginTop: 16,
  },
});
