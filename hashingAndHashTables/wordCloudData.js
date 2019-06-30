// APPROACH
// - initiate an empty object wordCounts to store unique words in theString
// - split theString into an array, eliminating punctuation
// - loop over theString
//      - translate current word to all lower case
//          - if wordCounts includes current word, increment its value by 1
//          - else, add current word to wordCounts with a value of 1
// - return wordCounts

function stringToWordCloudData(theString) {
  let wordCounts = {};
  let currentStartIdx = 0;
  let currentWord = '';
  const punctuation = [',', '.', '?', '!', '-', ' '];

  for (let i = 0; i < theString.length; i++) {
    const currentChar = theString[i].toLowerCase();
    let currentEndIdx = i;

    if (punctuation.includes(currentChar)) {
      currentWord = theString.slice(currentStartIdx, currentEndIdx);
    } else if (currentEndIdx === theString.length - 1) {
      currentWord = theString.slice(currentStartIdx);
    } else {
      continue;
    }

    currentWord = currentWord.toLowerCase();

    if (wordCounts[currentWord]) {
      wordCounts[currentWord]++;
    } else {
      wordCounts[currentWord] = 1;
    }

    currentStartIdx = currentEndIdx + 1;
  }
  return wordCounts;
}
