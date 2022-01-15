import React from 'react';

import StackStoreFeed from '../store-feed/stack';
import StackShoppingCart from '../shopping-cart/stack';
import Icon from 'react-native-vector-icons/EvilIcons';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

export default function StackRoot() {
  // I need add load font to use react-native-vector-icons
  // Icon.loadFont();
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          name="StackStoreFeed"
          component={StackStoreFeed}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{presentation: 'modal'}}>
        <RootStack.Screen
          name="StackShoppingCart"
          component={StackShoppingCart}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
