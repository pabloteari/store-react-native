import {createStore, applyMiddleware} from 'redux';

// import createSagaMiddleware from 'redux-saga';
// import rootReducer from '../reducers/rootReducer';
// import rootSaga from '../sagas/root';

// const sagaMiddleware = createSagaMiddleware();

// const configureStore = () => {
//   const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
//   sagaMiddleware.run(rootSaga);
//   return store;
// };

// export default configureStore;

import {configureStore, MiddlewareArray} from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import products from '../reducers/products';
import shoppingCart from '../reducers/shopping-cart';
import rootSaga from '../sagas/root';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    products,
    shoppingCart,
  },
  middleware: new MiddlewareArray().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
