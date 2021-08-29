import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_TOKEN_KEY = 'auth_token';
const LANGUAGE_CODE = 'language_code';

export class AppStorage {
  static getAuthToken = async (): Promise<string> => {
    const token = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
    return token || '';
  };
  static setAuthToken = (token: string): Promise<void> => {
    return AsyncStorage.setItem(AUTH_TOKEN_KEY, token);
  };
  static removeAuthToken = (): Promise<void> => {
    return AsyncStorage.removeItem(AUTH_TOKEN_KEY);
  };

  static getLanguageCode = async (): Promise<string | null> => {
    const languageCode = await AsyncStorage.getItem(LANGUAGE_CODE);
    return languageCode;
  };
  static setLanguageCode = (code: string): Promise<void> => {
    return AsyncStorage.setItem(LANGUAGE_CODE, code);
  };
}
