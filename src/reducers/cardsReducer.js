import {CARDS} from '../constants';

const cardsReducer = (state = [], action) => {
  switch(action.type) {
    case CARDS.LOAD: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default cardsReducer;
