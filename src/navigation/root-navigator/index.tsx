import React from 'react';

import StackStoreFeed from '../../scenes/store-feed/stack';
import StackShoppingCart from '../../scenes/shopping-cart-modal/stack';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

export default function StackRoot() {
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
