import React from 'react';
import StoreStack from './src/scenes/store-feed/stack';

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
    <>
      <StatusBar barStyle={statusBarStyle} />
      <NavigationContainer theme={theme}>
        <StoreStack />
      </NavigationContainer>
    </>
  );
};

export default App;
