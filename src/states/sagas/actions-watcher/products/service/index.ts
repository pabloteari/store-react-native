import {fetchProducts} from '../../../../../api/products';

import {call, put} from 'redux-saga/effects';
import {add_product} from '../../../../reducers/products';
export function* _fetchProducts() {
  try {
    const {data} = yield call(fetchProducts);

    if (data) {
      yield put(add_product(data));
    }
  } catch (error) {}
}
