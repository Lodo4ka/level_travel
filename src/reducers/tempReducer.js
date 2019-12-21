import {TEMP} from '../constants';

export default function(state = 0, action) {
  switch(action.type) {
    case TEMP.TEMP_SET: {
      return action.temp
    }
    default:
      return state;
  }
}