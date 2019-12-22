import { put, takeEvery, call, takeLatest, all, delay, fork } from 'redux-saga/effects';
import { setErrorLoadCards, setCards } from '../actions';
import { translateWordRuToEn, translateWordEnToRu } from '../translate'
import { CARDS } from '../constants';
import { fetchWeather } from '../api';


// function* fetchAll(action) {
//   // const task1 = yield fork(fetchResource, 'users')
//   // const task2 = yield fork(fetchResource, 'comments')
//     const transWordEn = yield fork(translateWordRuToEn, action.city);
//     const card = yield fork(fetchWeather, transWordEn);
//     yield fork(translateWordEnToRu, card);
// }

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
  // yield takeEvery(CARDS.LOAD, handleCardsLoad);
  yield takeLatest(CARDS.LOAD, handleCardsLoad);
}
