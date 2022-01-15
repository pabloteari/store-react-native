import React from 'react';

import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import s from './style';

export default function ShoppingCartScene() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
