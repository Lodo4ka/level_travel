import { put, call, takeLatest } from 'redux-saga/effects';
import { setErrorLoadCards, setCards } from '../actions';
import { translateWordRuToEn, translateWordEnToRu } from '../translate'
import { CARDS } from '../constants';
import { fetchWeather } from '../api';

export function* handleCardsLoad(action) {
  try {
    const transWordEn = yield call(translateWordRuToEn, action.city);
    const card = yield call(fetchWeather, transWordEn.replace(/\s/g, ''));
    const transCard = yield call(translateWordEnToRu, card);
    yield put(setCards(transCard));
  } catch (error) {
    yield put(setErrorLoadCards(error));
  }
}

export default function* watchCardsLoad() {
  yield takeLatest(CARDS.LOAD, handleCardsLoad);
}
