import analyzeText from './analyzeText';

describe('analyzeText', ()=> {
  it('function exists', () => {
    expect(typeof analyzeText).toEqual('function');
  });

  xit('splits input into separate words', () => {
    const sentence = 'The quick brown fox jumps over';
    expect(analyzeText(sentence)).toEqual(['The', 'quick', 'brown', 'fox', 'jumps', 'over']);
  });

  xit('splits with extra spaces and new lines', () => {
    const sentence = 'The quick \tbrown\n fox jumps \nover';
    expect(analyzeText(sentence)).toEqual(['The', 'quick', 'brown', 'fox', 'jumps', 'over']);
  });
})

// TODO needs more love, didn't take into splitting up the functions to be a bit more
// encapsulated to single responsibility, tests went down the hill as soon as checking
// frequncy started..