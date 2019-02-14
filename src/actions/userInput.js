// UserInput Actions
import { ADD_USER_INPUT } from './constants';

export default (wordCount) => {
  return {
    type: ADD_USER_INPUT,
    payload: wordCount
  };
};
