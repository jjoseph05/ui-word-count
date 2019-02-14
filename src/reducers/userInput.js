// User Input Reducer
const initialState = {
  wordContainer: []
};

export default (state = initialState, action) => {
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
