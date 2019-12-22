import translate from "translate";
import { CARDS, TEMP, CITY } from "../constants";

const loadCards = city => ({
  type: CARDS.LOAD,
  city
});

const setCards = card => ({
  type: CARDS.LOAD_SUCCESS,
  card
});

const deleteCards = id => ({
  type: CARDS.DELETE,
  id
});

const setErrorLoadCards = error => ({
  type: CARDS.LOAD_FAIL,
  error
});

const loadCity = word => ({
  type: CITY.LOAD,
  word
});

const setCity = city => ({
  type: CITY.LOAD_SUCCESS,
  city
});

const setErrorLoadCity = error => ({
  type: CITY.LOAD_FAIL,
  error
});

const setTemp = temp => ({
  type: TEMP.TEMP_SET,
  temp
})


export { loadCards, setCards, setErrorLoadCards, setTemp, deleteCards, loadCity,
setCity, setErrorLoadCity};
