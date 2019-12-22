import React from 'react';
import './App.css';
import 'weather-icons/css/weather-icons.css'
import InputCity from './components/InputCiity/InputCity';
import SliderCity from './components/SliderCity/SliderCity';
import Dashboard from './components/Dashboard/Dashboard';
import Error from './components/Error';

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
  }

  render() {
    const topStyle = {
      display: "flex",
      alignItems: "center",
    };
    return (
        <div className="App">
          <Error/>
          <div style={topStyle}>
            <InputCity/>
            <SliderCity />
          </div>
          <Dashboard/>
        </div>
    );
  }
}


export default App;
