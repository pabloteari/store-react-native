import React from 'react';
import RootStack from './src/navigation/root-navigator';

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
        <RootStack />
      </NavigationContainer>
    </>
  );
};

export default App;
