export default function analyzeText(str) {
  const cleanedWords = protectApostrophes((deepClean(str))),
        frequencyMap = {};
  const wordsArray = protectApostrophes(cleanedWords).split(/\s+/);

  wordsArray.map((word)=> (
    frequencyMap[word.toLowerCase()] = frequencyMap[word.toLowerCase()] + 1 || 1
  ))
  return reMapData(frequencyMap);
}

function deepClean(str) {
  return str.trim().replace(/[\.,-\/#!$%\^&\*;:{}=\-\?\‘_`~()]/g,"");
}

function protectApostrophes(str) {
  return str.replace(/(‘|'\s|\s'|’|")/," ");
}

function reMapData(data) {
  let remappedObject = {};

    remappedObject = Object.keys(data).map(function(word) {
      return {
        word: word,
        count: data[word]
      }
    })
  return remappedObject;
}

// TODO find a better way to handle single quotes, and double quotes, RegEx is
// challenging, but powerful..
// TODO also, a more robust test suite, TDD would have slower at first, but saved time in
// the long run I think
