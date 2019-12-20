import { CARDS } from "../constants";

const loadCards = city => {
  return {type: CARDS.LOAD,
  city}
};

const setCards = cards => ({
  type: CARDS.LOAD_SUCCESS,
  cards
});

const setError = error => ({
  type: CARDS.LOAD_FAIL,
  error
});

export {loadCards, setCards, setError}
