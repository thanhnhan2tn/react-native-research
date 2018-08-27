import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import AppReducer from 'reducers';
import { middleware } from 'config/navigations';

import { rootSaga } from '../saga';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  AppReducer,
  applyMiddleware(middleware, sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
