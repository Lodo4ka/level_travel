import { combineReducers } from "redux";
import loadingReducer from './loadingReducer';
import cardsReducer from './cardsReducer';
import errorReducer from './errorReducer';
import tempReducer from './tempReducer';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  error: errorReducer,
  cards: cardsReducer,
  temp: tempReducer
});

export default rootReducer;