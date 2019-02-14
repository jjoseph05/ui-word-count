import { createStore } from 'redux';
import userInputReducer from '../reducers/userInput';

export default () => {
  const store = createStore(
    userInputReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
