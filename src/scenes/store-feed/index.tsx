import React from 'react';

import {FlatList, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import s from './style';
import ProductPanel from '../../components/product-panel';

const DATA = [
  {
    id: '1',
    createdAt: '2019-09-02T12:58:54.103Z',
    name: 'Rustic Metal Fish',
    price: '289.00',
    image:
      'https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/78786342_2595727857185584_2538266839473979392_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BtAaniP_-6AAX8BcaeR&_nc_ht=scontent-gru2-1.xx&oh=00_AT-A13VrXtBzcGX0KOl3RfQwNOqhvFseO90OdBrVVrMkgg&oe=6206BD6E',
    stock: 65171,
  },
  {
    id: '2',
    createdAt: '2019-09-02T07:59:58.181Z',
    name: 'Sleek Wooden Soap',
    price: '430.00',
    image:
      'https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/78786342_2595727857185584_2538266839473979392_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BtAaniP_-6AAX8BcaeR&_nc_ht=scontent-gru2-1.xx&oh=00_AT-A13VrXtBzcGX0KOl3RfQwNOqhvFseO90OdBrVVrMkgg&oe=6206BD6E',
    stock: 91260,
  },
  {
    id: '3',
    createdAt: '2019-09-02T22:14:05.454Z',
    name: 'Small Cotton Shoes',
    price: '993.00',
    image:
      'https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/78786342_2595727857185584_2538266839473979392_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BtAaniP_-6AAX8BcaeR&_nc_ht=scontent-gru2-1.xx&oh=00_AT-A13VrXtBzcGX0KOl3RfQwNOqhvFseO90OdBrVVrMkgg&oe=6206BD6E',
    stock: 36608,
  },
  {
    id: '4',
    createdAt: '2019-09-02T07:36:56.139Z',
    name: 'Ergonomic Frozen Towels',
    price: '259.00',
    image:
      'https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/78786342_2595727857185584_2538266839473979392_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BtAaniP_-6AAX8BcaeR&_nc_ht=scontent-gru2-1.xx&oh=00_AT-A13VrXtBzcGX0KOl3RfQwNOqhvFseO90OdBrVVrMkgg&oe=6206BD6E',
    stock: 92065,
  },
  {
    id: '5',
    createdAt: '2019-09-02T05:18:30.393Z',
    name: 'Awesome Metal Pants',
    price: '69.00',
    image:
      'https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/78786342_2595727857185584_2538266839473979392_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BtAaniP_-6AAX8BcaeR&_nc_ht=scontent-gru2-1.xx&oh=00_AT-A13VrXtBzcGX0KOl3RfQwNOqhvFseO90OdBrVVrMkgg&oe=6206BD6E',
    stock: 54930,
  },
  {
    id: '6',
    createdAt: '2019-09-02T16:22:03.725Z',
    name: 'Intelligent Cotton Bacon',
    price: '14.00',
    image:
      'https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/78786342_2595727857185584_2538266839473979392_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BtAaniP_-6AAX8BcaeR&_nc_ht=scontent-gru2-1.xx&oh=00_AT-A13VrXtBzcGX0KOl3RfQwNOqhvFseO90OdBrVVrMkgg&oe=6206BD6E',
    stock: 88996,
  },
];

export default function StoreFeedScene() {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Shopping')}>
      <ProductPanel
        label={item.name}
        image={item.image}
        stock={item.stock}
        price={item.price}
        createdAt={item.createdAt}
      />
    </TouchableOpacity>
  );

  return (
    <View style={s.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
