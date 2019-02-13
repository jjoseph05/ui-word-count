import React from 'react';
import { connect } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, } from 'recharts';
import analyzeText from '../util/analyzeText';

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
        {this.props.inputData.wordContainer.userInput && 
          <FrequencyGraph data={this.props.inputData.wordContainer}/>
        }
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

const FrequencyGraph = (props) => {
  const { userInput: data } = props.data;

  return (
    <ResponsiveContainer width="90%" height={500}>
        <BarChart width={500} height={100} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="count"/>
          <YAxis/>
          <Tooltip/>
          <Bar dataKey="word" dataKey="count" fill="red" />
        </BarChart>
    </ResponsiveContainer>
  );
}

export default connect(mapStateToProps)(WordFrequencyApp);
