import {takeLatest} from 'redux-saga/effects';
import {CARDS} from '../constants';
import { getCity} from './cardsSaga';

export default function* rootSaga() {
  yield takeLatest(CARDS.LOAD, getCity);
}