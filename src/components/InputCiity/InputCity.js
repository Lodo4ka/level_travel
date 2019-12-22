import React from 'react';
import './InputCity.css';
import AutoSuggest from 'react-autosuggest';
import { connect} from "react-redux";
import { loadCards } from '../../actions';

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

  render() {
    const { value, suggestions } = this.state;
    const {loadImages} = this.props;
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
        <button onClick={e => loadImages(e.target.previousElementSibling.children[0].children[0].value)}
         className="btn-plus">+</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadImages: (value) => dispatch(loadCards(value)),
});


export default connect(null, mapDispatchToProps)(InputCity);