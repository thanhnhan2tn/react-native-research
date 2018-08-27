// import { all } from 'redux-saga/effects';
import { fork } from 'redux-saga/effects';
import { mainScreenSaga } from './mainScreenSaga';
import { feedbackSaga } from './feedbackSaga'

export function* rootSaga() {
  yield [
    fork(mainScreenSaga),
    fork(feedbackSaga)
  ];
}