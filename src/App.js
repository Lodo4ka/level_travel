import React from 'react';
import './App.css';
import 'weather-icons/css/weather-icons.css'
import InputCity from './components/InputCiity/InputCity';
import SliderCity from './components/SliderCity/SliderCity';
import CardWeather from "./components/CardWeather/CardWeather";

const apiKey = "8dc57cc9c86d270d365d053878b2d361";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: null,
      country: null
    };
    this.getWeather();
  }

  getWeather = async city => {
    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},ru&appid=${apiKey}`
    );
    const response = await apiCall.json();
    this.setState({
      city: response.name,
      country: response.sys.country
    });
  };

  submitForm = e => {
    e.preventDefault();
    debugger;
    this.getWeather(e.target.value);
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
          <InputCity submitForm={this.submitForm} />
          <SliderCity />
        </div>
        <CardWeather city={this.state.city} country={this.state.country} />
      </div>
    );
  }
}


export default App;
