import React from 'react';

import ShoppingCartScene from '.';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function StackShoppingCart() {
  return <Stack.Screen name="ShoppingCart" component={ShoppingCartScene} />;
}
