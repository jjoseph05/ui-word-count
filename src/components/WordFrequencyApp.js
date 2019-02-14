import React from 'react';
import { connect } from 'react-redux';
import addUserInput from '../actions/userInput';
import Header from './Header';
import WordsForm from './'

class WordFrequencyApp extends React.Component {
  render() {
    const subTitle = 'See what words you use the most!';

    return (
      <div>
        <Header subTitle={subTitle}/>
        <div className="container">
          <WordsForm onSubmit={(words) => {
            this.props.dispatch(addUserInput(words))
          }}/>
        </div>
        {this.props.inputData.wordContainer.userInput &&
          <FrequencyGraph data={this.props.inputData.wordContainer}/>
        }
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    inputData: state
  };
};

export default connect(mapStateToProps)(WordFrequencyApp);
