import {takeLatest, all} from 'redux-saga/effects';
import cardsSaga from './cardsSaga';
import {getCity} from './cardsSaga';
import {CARDS} from '../constants'

export default function* rootSaga() {
  // yield takeLatest(CARDS.LOAD, getCity);
  yield all([cardsSaga()]);
}