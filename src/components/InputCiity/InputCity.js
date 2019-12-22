import React from 'react';
import './InputCity.css';
import AutoSuggest from 'react-autosuggest';
import { connect} from "react-redux";
import { loadCards, loadCity, clearCity } from '../../actions';

function renderSuggestion(suggestion) {
  return <span>{suggestion}</span>;
}

class InputCity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.props.loadCity(value);
  };

  onSuggestionsClearRequested = () => {
    this.props.clearCity();
  };

  render() {
    const { value } = this.state;
    const {loadImages, cities} = this.props;
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
            suggestions={cities}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={(cities) => cities}
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

const mapStateToProps = ({cities}) => ({
  cities
});

const mapDispatchToProps = dispatch => ({
  loadImages: (value) => dispatch(loadCards(value)),
  loadCity: (word, regex) => dispatch(loadCity(word, regex)),
  clearCity: () => dispatch(clearCity())
});


export default connect(mapStateToProps, mapDispatchToProps)(InputCity);