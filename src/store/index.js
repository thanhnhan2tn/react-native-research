import { createStore, applyMiddleware } from 'redux';
import AppReducer from 'reducers';
import { middleware } from '../navigations';

const store = createStore(
  AppReducer,
  applyMiddleware(middleware),
);

export default store;
