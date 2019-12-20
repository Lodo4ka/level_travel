import { combineReducers } from "redux";
import loadingReducer from './loadingReducer';
import cardsReducer from './cardsReducer';
import errorReducer from './errorReducer';
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  // isLoading: loadingReducer,
  // cards: cardsReducer,
  // error: errorReducer,
  // weather: weatherReducer
  cards: cardsReducer
});

export default rootReducer;