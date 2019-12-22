import { all } from 'redux-saga/effects';
import cardsSaga from './cardsSaga';
import citySaga from './citySaga';

export default function* rootSaga() {
  yield all([cardsSaga(), citySaga()]);
}