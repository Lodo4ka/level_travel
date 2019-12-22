import { combineReducers } from "redux";
import loadingCardsReducer from './loadingCardsReducer';
import cardsReducer from './cardsReducer';
import errorReducer from './errorReducer';
import tempReducer from './tempReducer';
import cityReducer from './cityReducer';

const rootReducer = combineReducers({
  isLoading: loadingCardsReducer,
  error: errorReducer,
  cards: cardsReducer,
  temp: tempReducer,
  cities: cityReducer
});

export default rootReducer;