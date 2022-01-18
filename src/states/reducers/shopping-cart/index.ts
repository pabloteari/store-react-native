import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../../../interfaces/products';

const initialState: Product[] = [];

export const productInCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    //New product, one count
    add_new_product: (state, action: PayloadAction<Product>) => {
      var product = action.payload;

      let productWithCount: Product = {
        id: product.id,
        name: product.name,
        image: product.image,
        stock: product.stock,
        price: product.price,
        createdAt: product.createdAt,
        count: 1,
      };

      state.push(productWithCount);
    },
    add_count_product: (state, action: PayloadAction<number>) => {
      const index = action.payload;

      state[index].count += 1;
    },

    remove_product: (state, action: PayloadAction<number>) => {
      const index = action.payload;

      state.splice(index, 1);
    },
    remove_count_product: (state, action: PayloadAction<number>) => {
      const index = action.payload;

      state[index].count -= 1;
    },
  },
});

export const {
  add_new_product,
  add_count_product,
  remove_product,
  remove_count_product,
} = productInCartSlice.actions;
export default productInCartSlice.reducer;
