import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../../../interfaces/products';

const initialState: Product[] = [];

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add_product: (state, action: PayloadAction<Product[]>) => {
      const products = action.payload;

      state.push(...products);
    },
  },
});

export const {add_product} = productSlice.actions;
export default productSlice.reducer;
