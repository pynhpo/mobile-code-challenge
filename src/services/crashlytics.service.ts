import crashlytics from '@react-native-firebase/crashlytics';

const crashlyticsInstance = crashlytics();

export class CrashlyticsService {
  static recordError = (err: Error): void => {
    return crashlyticsInstance.recordError(err);
  };
}
