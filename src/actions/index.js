import translate from "translate";
import { CARDS, TEMP } from "../constants";

const loadCards = city => ({
  type: CARDS.LOAD,
  city
});

const setCards = card => ({
  type: CARDS.LOAD_SUCCESS,
  card
});

const setError = error => ({
  type: CARDS.LOAD_FAIL,
  error
});

const setTemp = temp => ({
  type: TEMP.TEMP_SET,
  temp
})

const translateWordRuToEn = async (word) => {
  return await translate(word, {
    from: 'ru',
    to: "en",
    engine: "google",
    key: "AIzaSyA_Oss7u3k1mKG_Hh_rOUFZtNeioDmIGA8"
  });
}

const translateWordEnToRu = async (word) => {
  return await translate(word, {
    from: 'en',
    to: "ru",
    engine: "google",
    key: "AIzaSyA_Oss7u3k1mKG_Hh_rOUFZtNeioDmIGA8"
  });
}

export {loadCards, setCards, setError, translateWordRuToEn, translateWordEnToRu}
