import React from 'react';
import CardWeather from '../CardWeather/CardWeather';
import { connect } from 'react-redux';
import { weatherIcon } from '../../constants';
import './Dashboard.css';

function Dashboard(props) {

  const getWeatherIcon = (icons, rangeId) => {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        return { icon: icons.Thunderstorm }
      case rangeId >= 300 && rangeId <= 321:
        return { icon: icons.Drizzle };
      case rangeId >= 500 && rangeId <= 521:
        return { icon: icons.Rain };
      case rangeId >= 600 && rangeId <= 622:
        return { icon: icons.Snow };
      case rangeId >= 701 && rangeId <= 781:
        return { icon: icons.Atmosphere };
      case rangeId === 800:
        return { icon: icons.Clear };
      case rangeId >= 801 && rangeId <= 804:
        return { icon: icons.Clouds }
      default:
        return {};
    }
  }

  const calCelsius = (temp) => {
    const tempCel = Math.floor(temp - 273.15);
    if (tempCel > 0) {
      return `+${tempCel}`;
    } 
    return tempCel;
  };

  const { cards, temp } = props;

  return (
    <div className="dashboard">
      {
        cards.map((card, index) => (
          calCelsius(card.main.temp) > temp 
          &&
          <CardWeather 
            key={index}
            city={card.name}
            weatherIcon={getWeatherIcon(weatherIcon, card.weather[0].id)}
            tempСelsius={calCelsius(card.main.temp)}
            pressure={card.main.pressure}
            wind={card.main.wind}
          />
        ))
      }
    </div>
  )
}

const mapStateToProps = ({cards, temp}) => ({
  cards,
  temp
})

export default connect(mapStateToProps, null)(Dashboard);

