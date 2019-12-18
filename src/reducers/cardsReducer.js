import {CARDS} from '../constants';

const cardsReducer = (state = [], action) => {
  if(action.type === CARDS.LOAD_SUCCESS) {
    return [...state, action.cards]
  }
  return state;
};

export default cardsReducer;