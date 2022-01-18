import {all} from 'redux-saga/effects';
import * as products from '../actions-watcher/products';

export default function* rootSaga() {
  yield all([products.actionWatcherFetchProducts()]);
}
