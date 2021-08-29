import { StyleSheet } from 'react-native';
import { colors } from '@theme/colors';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  signInButton: {
    alignSelf: 'center',
    marginTop: 32,
  },
  passwordInput: {
    marginTop: 16,
  },
});