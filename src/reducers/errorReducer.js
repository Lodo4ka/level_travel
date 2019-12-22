import {CARDS, CITY} from '../constants';

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case CARDS.LOAD_FAIL:
      return action.error.message;
    case CITY.LOAD_FAIL:
      return action.error;
    case CARDS.LOAD_SUCCESS:
      return null;
      
    default:
      return state;
  }
}

export default errorReducer;