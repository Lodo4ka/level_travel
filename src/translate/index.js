import translate from "translate";

const translateWordRuToEn = async (word) => {
  try {
    return await translate(word, {
      from: 'ru',
      to: "en",
      engine: "google",
      key: "AIzaSyA_Oss7u3k1mKG_Hh_rOUFZtNeioDmIGA8"
    }).replace(/\s/g, '');
  } catch (error) {
    throw new Error(error.toString());
  }
}
const translateWordEnToRu = async (card) => {
  try {
    card.name = await translate(card.name, {
      from: 'en',
      to: "ru",
      engine: "google",
      key: "AIzaSyA_Oss7u3k1mKG_Hh_rOUFZtNeioDmIGA8"
    });
  return card;
  } catch (error) {
    throw new Error(error.toString());
  }
}

export {translateWordEnToRu, translateWordRuToEn};