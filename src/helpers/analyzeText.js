export default function analyzeText(str) {
  const wordsArray = str.split(/\s+/),
        frequencyMap = {};
  wordsArray.map((word)=> (
    frequencyMap[word] = frequencyMap[word] + 1 || 1
  ))
  
  return frequencyMap;
}
// TODO make more robust for none characters e.g. !@#$&*
// module.exports = analyzeText;
