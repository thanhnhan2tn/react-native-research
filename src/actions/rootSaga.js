import { all } from 'redux-saga/effects';
import { watchListRestaurant } from './restaurantActions';

export default function* rootSaga() {
  yield all([
    watchListRestaurant(),
  ]);
}
