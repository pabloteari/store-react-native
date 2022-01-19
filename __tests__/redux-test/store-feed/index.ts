import {expectSaga} from 'redux-saga-test-plan';
import {_fetchProducts} from '../../../src/states/sagas/actions-watcher/products/service';

it('saga products works!', () => {
  return expectSaga(_fetchProducts).run();
});
