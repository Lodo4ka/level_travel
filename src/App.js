import React from 'react';
import './App.css';
import 'weather-icons/css/weather-icons.css'
import InputCity from './components/InputCiity/InputCity';
import SliderCity from './components/SliderCity/SliderCity';
// import CardWeather from "./components/CardWeather/CardWeather";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: '',
      icon: '',
      celsius: null,
      wind: 0,
      pressure: 0,
      error: false
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }

  getWeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }

  calCelsius(temp) {
    const tempCel = Math.floor(temp - 273.15);
    if (tempCel > 0) {
      return `+${tempCel}`;
    } 
    return tempCel;
  };


  render() {
    const topStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };
    return (
        <div className="App">
          <div style={topStyle}>
            <InputCity/>
            <SliderCity />
          </div>
          {/* <CardWeather
            city={this.state.city}
            weatherIcon={this.state.icon}
            tempСelsius={this.state.celsius}
            pressure={this.state.pressure}
            wind={this.state.wind}
          /> */}
        </div>
    );
  }
}


export default App;
