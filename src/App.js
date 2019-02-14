import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import WordFrequencyApp from './components/WordFrequencyApp';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore();

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
