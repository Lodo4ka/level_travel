import { combineReducers } from "redux";
import loadingReducer from './loadingReducer';
import cardsReducer from './cardsReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  cards: cardsReducer,
  error: errorReducer
});

export default rootReducer;