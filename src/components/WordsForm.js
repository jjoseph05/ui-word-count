import React from 'react';
import analyzeText from '../util/analyzeText';

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
        <div>
          <textarea
            className="textarea"
            rows="8"
            cols="50"
            value={this.state.userInput}
            onChange={this.onTextAreaChange}
            placeholder="Please enter text to analyze..."
            spellCheck="false"
          >
          </textarea>
        </div>
        <div>
          <button
            className="big-button"
            disabled={!this.state.userInput}
          >
            Analyze Text
          </button>
        </div>
      </form>
    )
  }
}

export default WordsForm;
