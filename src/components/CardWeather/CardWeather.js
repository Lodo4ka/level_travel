import React from 'react'

export default function CardWeather(props) {
  return (
    <div className="cardss">
      <h1>{props.city}</h1>
      <h5>
        <i className="wi wi-day-sunny"></i>
      </h5>
      <h1>25&deg;</h1>
      {minmaxTemp(24, 19)}
    </div>
  )

  function minmaxTemp(min, max) {
    return (
      <h3>
        <span>{min}&deg;</span>
        <span>{max}&deg;</span>
      </h3>
    );
  }
}
