import {CARDS} from '../constants';

const cardsReducer = (state = [], action) => {
switch(action.type) {
    case CARDS.LOAD_SUCCESS: {
      return [...state, action.card];
    }
    default: {
      return state;
    }
  }
};

export default cardsReducer;
