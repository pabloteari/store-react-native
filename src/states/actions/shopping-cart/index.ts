import {Product} from '../../../interfaces/products';

export const addProduct = ({Product: product}) => ({
  type: 'ADD_CART_PRODUCTS',
  payload: {product},
});

export const RemoveProducts = () => ({
  type: 'REMOVE_CART_PRODUCTS',
});
