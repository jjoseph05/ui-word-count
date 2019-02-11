import React from 'react';
import { connect } from 'react-redux';

import analyzeText from '../util/analyzeText'

const ADD_USER_INPUT = "ADD_USER_INPUT";

const AddUserInput = (userInput) => {
  return {
    type: ADD_USER_INPUT,
    value: action.payload
  };
};

mapStateToProps = (state) => {
  return {

  };
};

export default class WordFrequencyApp extends React.Component {
  state = {
    inputData: {}
  };


  handleUserSubmit = (e) => {
    e.preventDefault();
    const userInput = analyzeText(e.target.elements.wordContent.value);
    this.setState(() => ({ inputData: userInput }));
  };

  render() {
    const words = this.state.inputData;

    return (
      <div>
        <form onSubmit={this.handleUserSubmit}>
          <textarea rows="10" cols="50" name="wordContent"></textarea>
          <button>Analyze</button>
        </form>
        <FrequencyCountList words={words}/>
      </div>
    )
  }
};

const FrequencyCountList = (props) => {
  return ( 
    <div>
      <p>Word : Frequency</p>
      {console.log(Object.keys(props.words).length)}
      {props.words &&
        Object.keys(props.words).map((word, index) => (
          <FrequencyCountItem
            key={index}
            word={word}
            count={props.words[word]}
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

// props.inputData.map((word, index)=> (
//   Object.keys(word).map((key) => (
//     <FrequencyCountItem
//       key={index}
//       word={key}
//       count={word[key]}
//   />
//   ))
// ))


// class FrequencyCountList extends React.Component {
//   render() {
//     console.log(this.state, 'hello');
//     const words = [ { 'hello' : 1 }, { 'yellow' : 2 }, { 'poop' : 21 } ];
//     return (
//       <div>
//       <p>Word : Frequency</p>
//       {words.length}
//       {
//         words.map((word, index)=> (
//           Object.keys(word).map((key) => (
//             <FrequencyCountItem
//               key={index}
//               word={key}
//               count={word[key]}
//           />
//           ))
//         ))
//       }

//     </div>
//     )
//   }
// }




// class ContentInputContainer extends React.Component {
//   handleAnalyzeSumbit(e) {
//     e.preventDefault();
//     const contentForAnalysis = e.target.elements.wordContent.value;
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleAnalyzeSumbit}>
//         <textarea rows="10" cols="50" name="wordContent"></textarea>
//         <button>Analyze</button>
//       </form>
//     )
//   }
// }
