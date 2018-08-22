import createSagaMiddleWare from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import AppReducer from '../reducers';
import { middleware } from '../config/navigations';
import rootSaga from '../actions/rootSaga';

const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(
  AppReducer,
  applyMiddleware(middleware, sagaMiddleWare),
);
sagaMiddleWare.run(rootSaga);
export default store;
