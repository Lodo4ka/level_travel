import { put, takeEvery, call, takeLatest } from 'redux-saga/effects';
import { setErrorLoadCards, setCards } from '../actions';
import { translateWordRuToEn, translateWordEnToRu } from '../translate'
import { CARDS } from '../constants';
import { fetchWeather } from '../api';

export function* handleCardsLoad(action) {
  try {
    const transWordEn = yield call(translateWordRuToEn, action.city);
    const card = yield call(fetchWeather, transWordEn);
    const transCard = yield call(translateWordEnToRu, card);
    yield put(setCards(transCard));
  } catch (error) {
    yield put(setErrorLoadCards(error.toString()));
  }
}

export default function* watchCardsLoad() {
  // yield takeEvery(CARDS.LOAD, handleCardsLoad);
  yield takeLatest(CARDS.LOAD, handleCardsLoad);
}
