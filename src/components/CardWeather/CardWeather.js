import React, { useEffect, useState } from 'react';
import translate from "translate";
import { connect } from 'react-redux';
import {deleteCards} from '../../actions';
import './CardWeather.css';

function CardWeather(props) {

  const {deleteAction, id, weatherIcon, tempСelsius, wind, city, pressure} = props;

  return (
    <div className="card-wrapper">
    <div className="card">
      <div className="title">
        <span className="city-name">{city}</span>
        <span className="close" onClick={() => deleteAction(id)}></span>
      </div>
      <span className="icon-container">
        <i className={`wi ${weatherIcon.icon} display-1`}></i>
      </span>

      <span className="celsius">{tempСelsius}&deg;C</span>

      <div className="wind">Ветер: {wind} м/с</div>
      <div className="pressure">
        Давление: {pressure} мм
      </div>
    </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  deleteAction: (id) => dispatch(deleteCards(id))
});

export default connect(null, mapDispatchToProps)(CardWeather);