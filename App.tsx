import { LoadingOverlay } from '@components/loading-overlay.component';
import store, { persistor } from '@init/store';
import { AppNavigator } from '@navigation/app.navigator';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { colors } from '@theme/colors';
import { LoadingView } from '@components/loading-view.component';

const App = (): React.ReactElement => {
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);
  return (
    <RootSiblingParent>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={<LoadingView />} persistor={persistor}>
            <StatusBar translucent backgroundColor={colors.transparent} />
            <AppNavigator />
            <LoadingOverlay />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </RootSiblingParent>
  );
};

export default App;
