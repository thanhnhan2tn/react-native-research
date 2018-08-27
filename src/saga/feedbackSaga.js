import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

export function* feedbackSaga() {
  yield takeLatest('FETCH_FEEDBACKS', doFetchFeedbacks);
}

function* doFetchFeedbacks(action) {
  try {
    const response = yield axios({
      method: 'GET',
      url: 'https://tn-food.herokuapp.com/feedbacks?$limit=1000'
    });
    yield put({
      type: 'FETCH_FEEDBACKS_SUCCESS',
      payload: {
        feedbacks: response.data,
        internalFeedbacks: action.feedback
      }
    });
  } catch (error) {
    yield put({ type: 'FETCH_FEEDBACKS_FAILURE' })
  }
}