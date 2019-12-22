import {CARDS} from '../constants';

const cardsReducer = (state = [], action) => {
switch(action.type) {
    case CARDS.LOAD_SUCCESS: {
      return [...state, action.card];
    }
    case CARDS.DELETE: {
      return [...state.filter(stCard => stCard.id !== action.id)];
    }
    default: {
      return state;
    }
  }
};

export default cardsReducer;
