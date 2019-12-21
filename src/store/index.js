import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from '../sagas';

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware),
    reduxDevTools)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;