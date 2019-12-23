import {CARDS, CITY} from '../constants';

const errorReducer = (state = "", action) => {
  switch (action.type) {
    case CARDS.LOAD_FAIL:
      return action.error.message;
    case CITY.LOAD_FAIL:
      return action.error;
    case CARDS.LOAD_SUCCESS:
      return "";
      
    default:
      return state;
  }
}

export default errorReducer;