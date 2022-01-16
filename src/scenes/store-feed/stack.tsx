import React from 'react';

import StoreFeedScene from '.';
import ShoppingCart from '../shopping-cart-modal';
import Icon from 'react-native-vector-icons/EvilIcons';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function StackHomeScreen() {
  // I need add load font to use react-native-vector-icons
  Icon.loadFont();

  const navigation = useNavigation();
  const goToShoppingCart = () =>
    navigation.navigate('Shopping' as never, {} as never);

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Store"
          component={StoreFeedScene}
          options={{
            headerRight: () => (
              <Icon
                name="cart"
                size={30}
                color="green"
                onPress={goToShoppingCart}
              />
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
