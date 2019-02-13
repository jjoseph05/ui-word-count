export default function analyzeText(str) {
  const wordsArray = str.split(/\s+/),
        frequencyMap = {};

  wordsArray.map((word)=> (
    frequencyMap[word] = frequencyMap[word] + 1 || 1
  ))
  return reMapData(frequencyMap);
}

function reMapData(data) {
  let remappedObject = {};

    remappedObject = Object.keys(data).map(function(word, index) {
      return {
        name: 'name',
        word: word,
        count: data[word],
        key: index + 1
      }
    })
  return remappedObject;
}
// TODO make more robust for none characters e.g. !@#$&*
// module.exports = analyzeText;
