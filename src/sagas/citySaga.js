import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import { CITY } from '../constants';
import {setCity, setErrorLoadCity} from '../actions';
import { fetchCity } from '../api'

export function* handleCityLoad(action) {
  try {
    const city = yield call(fetchCity, action.value);
    yield put(setCity(city));
  } catch (error) {
    yield put(setErrorLoadCity(error.toString()));
  }
}

export default function* watchCityLoad() {
  yield takeEvery(CITY.LOAD, handleCityLoad);
}