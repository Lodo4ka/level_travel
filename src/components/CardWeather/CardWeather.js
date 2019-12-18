import React, { useEffect, useState } from 'react';
import translate from "translate";
import './CardWeather.css';

export default function CardWeather(props) {

  const [translateWord, setTranslateWord] = useState('');

  useEffect(() => {
    async function translateWord() {
      const word = await translate(props.city, {
        to: "ru",
        engine: "google",
        key: "AIzaSyA_Oss7u3k1mKG_Hh_rOUFZtNeioDmIGA8"
      });
      setTranslateWord(word);
    }
    translateWord();
  }, [props.city]);

  return (
    <div className="cards">
      <div className="title">
        <strong>{translateWord}</strong>
        <span className="close"></span>
      </div>
      <span className="icon-container">
        <i className={`wi ${props.weatherIcon} display-1`}></i>
      </span>

      {props.tempСelsius ? (
        <span className="celsius">{props.tempСelsius}&deg;C</span>
      ) : null}

      {/* {minmaxTemp(props.tempMin, props.tempMax)} */}

      <div className="wind">Ветер: {props.wind} м/с</div>
      <div className="pressure">
        Давление: {props.pressure} мм
      </div>
    </div>
  );

  // function minmaxTemp(min, max) {
  //   return (
  //     <h3>
  //       <span>{min}&deg;</span>
  //       <span>{max}&deg;</span>
  //     </h3>
  //   );
  // }
}