import React from 'react';

import {
  useAppSelector,
  useAppDispatch,
} from '../../states/reducers/rootReducer';
import {
  remove_count_product,
  add_count_product,
  remove_product,
} from '../../states/reducers/shopping-cart';
import {FlatList, SafeAreaView, Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Product} from '../../interfaces/products';

import alertDialog from '../../navigation/helpers/alerts-dialog';
import ProductPanelShoppingCard from '../../components/product-panel-shopping-cart';
import s from './style';

export default function ShoppingCartScene() {
  const navigation = useNavigation();
  const productsInCart = useAppSelector(state => state.shoppingCart);
  const dispatch = useAppDispatch();

  const removeProductCart = (index: number) => {
    if (productsInCart[index].count === 1) {
      alertDialog(
        'Remove product',
        'Want to remove this product?',
        () => dispatch(remove_product(index)),
        'Remove',
      );
    } else {
      dispatch(remove_count_product(index));
    }
  };

  const renderItem = ({item, index}: {item: Product; index: number}) => (
    <ProductPanelShoppingCard
      id={item.id}
      name={item.name}
      image={item.image}
      stock={item.stock}
      price={item.price}
      createdAt={item.createdAt}
      count={item.count ? item.count : 0}
      onPressLess={() => removeProductCart(index)}
      onPressMore={() => dispatch(add_count_product(index))}
    />
  );

  return (
    <SafeAreaView style={s.container}>
      <FlatList
        data={productsInCart}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={s.panelButtons}>
        <Button onPress={() => navigation.goBack()} title="Keep buying" />
        <Button title="Pay" />
      </View>
    </SafeAreaView>
  );
}
