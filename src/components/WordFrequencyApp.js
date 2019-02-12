import React from 'react';
import { connect } from 'react-redux';
import analyzeText from '../util/analyzeText'

const ADD_USER_INPUT = "ADD_USER_INPUT";

const addUserInput = (wordCount) => {
  return {
    type: ADD_USER_INPUT,
    payload: wordCount
  };
};

const mapStateToProps = (state) => {
  return {
    inputData: state
  };
};

class WordFrequencyApp extends React.Component {
  render() {
    return (
      <div>
        <WordsForm onSubmit={(words) => {
          this.props.dispatch(addUserInput(words))
        }}/>
        <FrequencyCountList words={this.props.inputData.wordContainer}/>
      </div>
    )
  }
};

class WordsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: props.words ? props.words.userInput : ''
    }
  }

  onTextAreaChange = (e) => {
    const userInput = e.target.value;
    this.setState(()=> ({ userInput }))
  }

  handleWordFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      userInput: analyzeText(this.state.userInput)
    })
  };

  render() {
    return (
      <form onSubmit={this.handleWordFormSubmit}>
        <textarea
          rows="10"
          cols="50"
          value={this.state.userInput}
          onChange={this.onTextAreaChange}
        >
        </textarea>
        <button
          disabled={!this.state.userInput}
        >
          Analyze
        </button>
      </form>
    )
  }
}

const FrequencyCountList = (props) => {
  const { userInput: wordCount } = props.words;

  return ( 
    <div>
      <p>Word : Frequency</p>
      {wordCount &&
        Object.keys(wordCount).map((word, index) => (
          <FrequencyCountItem
            key={index}
            word={word}
            count={wordCount[word]}
          />
        ))
      }
    </div>
  )
}

const FrequencyCountItem = (props) => (
  <div className="responsive-circle">
    <div className="circle-inner"> &#123; {props.word} : {props.count} &#125;</div>
  </div>
);

export default connect(mapStateToProps)(WordFrequencyApp);
