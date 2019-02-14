import analyzeText from './analyzeText';

describe('analyzeText', ()=> {
  it('function exists', () => {
    expect(typeof analyzeText).toEqual('function');
  });

  it('splits input into separate words', () => {
    const sentence = 'The quick brown fox jumps over';
    expect(analyzeText(sentence)).toEqual(['The', 'quick', 'brown', 'fox', 'jumps', 'over']);
  });

  it('splits with extra spaces and new lines', () => {
    const sentence = 'The quick \tbrown\n fox jumps \nover';
    expect(analyzeText(sentence)).toEqual(['The', 'quick', 'brown', 'fox', 'jumps', 'over']);
  });
})
