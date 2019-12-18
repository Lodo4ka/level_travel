import {CARDS} from '../constants';

const loadingReducer = (state = false, action) => {
  switch(action.type) {
    case CARDS.LOAD:
      return true;
    case CARDS.LOAD_SUCCESS:
      return false;
    case CARDS.LOAD_FAIL:
      return false;

    default:
      return state;
  }
}

export default loadingReducer;