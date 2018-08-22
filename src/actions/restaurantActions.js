import { put, takeEvery } from 'redux-saga/effects';
import {
  GET_LIST_RESTAURANT, GET_LIST_RESTAURANT_SUCCESS,
  GET_LIST_RESTAURANT_ERROR,
} from './actionTypes';
import { getListRestaurant } from '../api';

export function* fetchListRestaurant() {
  try {
    const results = yield getListRestaurant();
    yield put({
      type: GET_LIST_RESTAURANT_SUCCESS,
      payload: { listRestaurant: results.body.data },
    });
  } catch (error) {
    yield put({ type: GET_LIST_RESTAURANT_ERROR });
  }
}

export function* watchListRestaurant() {
  yield takeEvery(GET_LIST_RESTAURANT, fetchListRestaurant);
}
