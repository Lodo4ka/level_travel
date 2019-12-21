import React from 'react';
import './InputCity.css';
import AutoSuggest from 'react-autosuggest';
import russia from "../../0722a93c35dfba96337b-435b297ac6d90d13a68935e1ec7a69a225969e58/russia.json";
import { connect} from "react-redux";
import {loadCards} from '../../actions';

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return russia.filter(language => regex.test(language.city));
}

function getSuggestionValue(suggestion) {
  return suggestion.city;
}

function renderSuggestion(suggestion) {
  return <span>{suggestion.city}</span>;
}

class InputCity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  searchCity = (e) => {
    this.props.dispatch(loadCards(e.target.previousElementSibling.children[0].children[0].value));
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Введите город",
      value,
      onChange: this.onChange
    };

    return (
      <div className="input-container">
        <form onSubmit={e => e.preventDefault()} className="form-input">
          <AutoSuggest
            className="input-autocomplete"
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
        </form>
        <button onClick={this.searchCity} className="btn-plus">+</button>
      </div>
    );
  }
}

export default connect(null, null)(InputCity);