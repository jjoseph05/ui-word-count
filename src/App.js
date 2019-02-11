import React from 'react';
import ReactDOM from 'react-dom';
import WordFrequencyApp from './components/WordFrequencyApp';

import { Provider } from 'react-redux';
import { createStore } from 'redux';



const initialState = {
  loading: false,
  wordContainer: []
};

const wordContainerReducer = (state = initialState, action) => {
  switch (action.type) {
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



ReactDOM.render(<WordFrequencyApp />, document.getElementById('app'));
