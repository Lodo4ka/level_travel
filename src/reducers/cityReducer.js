import {CITY} from '../constants';

const cityReducer = (state = [], action) => {
switch(action.type) {
    case CITY.LOAD_SUCCESS: {
      return [...action.city.map(val => val.city)];
    }
    case CITY.CLEAR: {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default cityReducer;