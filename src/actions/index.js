import { CARDS, TEMP, CITY, TRANSLATE } from "../constants";

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

const loadCity = (value) => ({
  type: CITY.LOAD,
  value
});

const setCity = city => ({
  type: CITY.LOAD_SUCCESS,
  city
});

const clearCity = () => ({
  type: CITY.CLEAR
});

const setErrorLoadCity = error => ({
  type: CITY.LOAD_FAIL,
  error
});

const setTemp = temp => ({
  type: TEMP.TEMP_SET,
  temp
});


export { loadCards, setCards, setErrorLoadCards, setTemp, deleteCards, loadCity,
setCity, setErrorLoadCity, clearCity };
