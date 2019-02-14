import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import WordFrequencyApp from './components/WordFrequencyApp';
import 'normalize.css/normalize.css'
import './styles/styles.scss'


const initialState = {
  loading: false,
  wordContainer: []
};

const wordContainerReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_USER_INPUT':
      return {
        ...state,
        wordContainer: action.payload
      }
    default:
      return state;
  }
};

const store = createStore(wordContainerReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <WordFrequencyApp />
      </Provider>
    )
  }
}

console.log('Store state: ', store.getState());

ReactDOM.render(<App />, document.getElementById('app'));
