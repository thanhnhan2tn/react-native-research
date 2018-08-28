import { all } from 'redux-saga/effects';
import { watchListRestaurant } from './restaurantActions';
import { watchListDish } from './dishActions';

export default function* rootSaga() {
  yield all([
    watchListRestaurant(),
    watchListDish(),
  ]);
}
