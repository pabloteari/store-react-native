import {combineReducers} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from '../store';

import productsReducer from './products';
import shoppingCartReducer from './shopping-cart';

export const rootReducer = combineReducers({
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
});

export default rootReducer;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
