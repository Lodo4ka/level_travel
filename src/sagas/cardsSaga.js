import { put, takeEvery, call, select } from 'redux-saga/effects';
import { setError, setCards } from '../actions';
// import { CARDS } from '../constants';
import { fetchWeather } from '../api';

// export const getCity = state => state.city;

// export function* handleCardsLoad() {
//   try {
//     const city = yield select(getCity);
//     const card = yield call(fetchWeather, city);
//     yield put(setCards(card));
//   } catch (error) {
//     yield put(setError(error.toString()));
//   }
// }

// export default function* watchCardsLoad() {
//   yield takeEvery(CARDS.LOAD, handleCardsLoad);
// }

export function* getCity(action) {
  const city = yield call(fetchWeather, action.cards);
  yield put(setCards(city));
}