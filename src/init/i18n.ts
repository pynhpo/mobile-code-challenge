import en from '@locales/en.json';
import vi from '@locales/vi.json';
import { AppStorage } from '@services/app-storage.service';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';

export type Locale = 'en' | 'vi';

type InitOptions = {
  lng: string;
  fallbackLng: Locale;
  resources: Record<Locale, Record<'translation', any>>;
};

const initOptions: InitOptions = {
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
  },
};

AppStorage.getLanguageCode()
  .then((languageCode) => {
    if (languageCode) {
      initOptions.lng = languageCode;
    }
    i18n.use(initReactI18next).init(initOptions);
  })
  .catch(() => {
    i18n.use(initReactI18next).init(initOptions);
  });

export default i18n;
