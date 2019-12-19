function weather(state = {}, action) {
  switch(action.type) {
    case 'WEATHER_FETCHED':
      return action.reponse;
    default:
      return state;
  }
}

export default weather;