import React from 'react';

export default class WordFrequencyApp extends React.Component {
  render() {
    const words = [ { 'hello' : 1 }, { 'yellow' : 2 }, { 'poop' : 21 } ];
    return (
      <div>
        <ContentInputContainer />
        <FrequencyCountList words={words}/>
      </div>
    )
  }
}

class ContentInputContainer extends React.Component {
  handleAnalyzeSumbit(e) {
    e.preventDefault();
    const contentForAnalysis = e.target.elements.wordContent.value;
  }

  render() {
    return (
      <form onSubmit={this.handleAnalyzeSumbit}>
        <textarea rows="10" cols="50" name="wordContent"></textarea>
        <button>Analyze</button>
      </form>
    )
  }
}

class FrequencyCountList extends React.Component {
  render() {
    const words = [ { 'hello' : 1 }, { 'yellow' : 2 }, { 'poop' : 21 } ];
    return (
      <div>
      <p>Word : Frequency</p>
      {words.length}
      {
        words.map((word, index)=> (
          Object.keys(word).map((key) => (
            <FrequencyCountItem
              key={index}
              word={key}
              count={word[key]}
          />
          ))
        ))
      }

    </div>
    )
  }
}

const FrequencyCountItem = (props) => (
  <div>
    {console.log(props)}
    <p>{props.word} : {props.count}</p>
  </div>
);
