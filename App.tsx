import React from 'react';
import RootStack from './src/navigation/root-navigator';

import {store} from './src/states/store';
import {Provider} from 'react-redux';
import {StatusBar, useColorScheme} from 'react-native';

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? DarkTheme : DefaultTheme;
  const statusBarStyle = isDarkMode ? 'light-content' : 'dark-content';

  return (
    <Provider store={store}>
      <StatusBar barStyle={statusBarStyle} />
      <NavigationContainer theme={theme}>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
