import {_fetchProducts} from './service';
import {takeLatest} from 'redux-saga/effects';

import * as actWatcher from './actions-type';

export function* actionWatcherFetchProducts() {
  yield takeLatest(actWatcher.FETCH_PRODUCTS, _fetchProducts);
}
