import { put, takeEvery, call, all } from 'redux-saga/effects';
import { GET_DISH, GET_DISH_SUCCESS, GET_DISH_ERROR } from './actionTypes';
import { getDish } from '../api';

export function* getListDish(action) {
  ids = action.ids;
  try {
    listDish = yield all(ids.map(id => (call(getDish, id))));
    yield put({
      type: GET_DISH_SUCCESS,
      payload: { listDish },
    });
  } catch (error) {
    console.log(error)
    yield put({ type: GET_DISH_ERROR })
  }
}
export function* watchListDish() {
  yield takeEvery(GET_DISH, getListDish);
}