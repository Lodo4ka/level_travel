import { CARDS } from "../constants";

const loadCards = city => ({
  type: CARDS.LOAD
});

const setCards = cards => ({
  type: CARDS.LOAD_SUCCESS,
  cards
});

const setError = error => ({
  type: CARDS.LOAD_FAIL,
  error
});

export {loadCards, setCards, setError}
