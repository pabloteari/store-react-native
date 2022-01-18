import {all} from 'redux-saga/effects';
import * as products from '../actions-watcher/products';
// import * as shoppingCart from '../actions-watcher/shopping-cart';

export default function* rootSaga() {
  yield all([
    products.actionWatcherFetchProducts(),
    // shoppingCart.actionWatcherShoppingCart(),
  ]);
}
