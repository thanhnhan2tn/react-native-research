import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

export function* mainScreenSaga() {
  yield takeLatest('FETCH_RESTAURANTS', doFetchRestaurants);
}

function* doFetchRestaurants() {
  try {
    const response = yield axios({
      method: 'GET',
      url: 'https://tn-food.herokuapp.com/restaurants?$limit=1000'
    });
    yield put({ type: 'FETCH_RESTAURANTS_SUCCESS', payload: response.data });
  } catch (error) {
    
  }
}