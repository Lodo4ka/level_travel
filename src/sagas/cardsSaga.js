import { put, takeEvery, call } from 'redux-saga/effects';
import { setError, setCards, translateWordRuToEn } from '../actions';
import { CARDS } from '../constants';
import { fetchWeather } from '../api';

export function* handleCardsLoad(action) {
  try {
    const transWordEn = yield call(translateWordRuToEn, action.city);
    const card = yield call(fetchWeather, transWordEn);
    yield put(setCards(card));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchCardsLoad() {
  yield takeEvery(CARDS.LOAD, handleCardsLoad);
}
