import React from 'react';

import StoreFeedScene from '.';
import ShoppingCart from '../shopping-cart';
import Icon from 'react-native-vector-icons/EvilIcons';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();

export default function StackHomeScreen() {
  // I need add load font to use react-native-vector-icons
  Icon.loadFont();
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Store"
          component={StoreFeedScene}
          options={{
            headerRight: () => (
              <TouchableOpacity>
                <Icon name="cart" size={30} color="green" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="Shopping" component={ShoppingCart} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
