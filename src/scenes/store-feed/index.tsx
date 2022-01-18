import React, {useEffect} from 'react';

import {
  useAppSelector,
  useAppDispatch,
} from '../../states/reducers/rootReducer';
import {
  add_new_product,
  add_count_product,
} from '../../states/reducers/shopping-cart/';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Product} from '../../interfaces/products';
import {fetchProducts} from '../../states/actions/products/';

import s from './style';
import ProductPanel from '../../components/product-panel';
import alertDialog from '../../navigation/helpers/alerts-dialog';

export default function StoreFeedScene() {
  const navigation = useNavigation();
  const products = useAppSelector(state => state.products);
  const productsInCart = useAppSelector(state => state.shoppingCart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addProductShoppingCart = (item: Product) => {
    const index = productsInCart.findIndex(i => i.id === item.id);

    if (index > -1) {
      dispatch(add_count_product(index));
    } else {
      dispatch(add_new_product(item));
    }
    navigation.navigate('Shopping' as never, {} as never);
  };

  // We can use react-native-i18n, which would default the labels to this message.
  const messageToConfirmProduct =
    'Want to add this product to your shopping cart?';

  const renderItem = ({item}: {item: Product}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        alertDialog(item.name, messageToConfirmProduct, () =>
          addProductShoppingCart(item),
        )
      }>
      <ProductPanel
        id={item.id}
        name={item.name}
        image={item.image}
        stock={item.stock}
        price={item.price}
        createdAt={item.createdAt}
        count={item.count}
      />
    </TouchableOpacity>
  );

  return (
    <View style={s.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
