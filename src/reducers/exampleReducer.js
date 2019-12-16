import { IMAGES } from "../constans";

const exampleReducer = (state = [], action) => {
  if(action.type === IMAGES.LOAD_SUCCESS) {
    return [...state, ...action.images]
  }
  return state;
}

export default exampleReducer;