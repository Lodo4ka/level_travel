import {CITY} from '../constants';

const cityReducer = (state = [], action) => {
switch(action.type) {
    case CITY.LOAD_SUCCESS: {
      // return [...state, action.card];
      debugger;
    }
    default: {
      return state;
    }
  }
};

export default cityReducer;