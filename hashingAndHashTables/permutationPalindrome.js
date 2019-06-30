// APPROACH
// - initiate lettersCount = {} to keep count of each unique letter of theString
// - loop through theString
//      - if lettersCount includes the current letter, increment its value by 1
//      - else, add the letter to lettersCount with a value of 1
// - initiate oddLetterCount = 0 to keep count of how many letters have an odd count
// - loop through lettersCount object
//      - if lettersCount[j] % 2 = 1, increment oddLetterCount by 1
// - if oddLetterCount <= 1, return true
// - else, return false

function hasPalindromePermutation(theString) {
  let lettersCount = {};
  let oddLetterCount = 0;

  for (let i = 0; i < theString.length; i++) {
    let currentLetter = theString[i];
    if (lettersCount[currentLetter]) {
      lettersCount[currentLetter]++;
    } else {
      lettersCount[currentLetter] = 1;
    }
  }

  for (let j in lettersCount) {
    if (lettersCount[j] % 2 === 1) {
      oddLetterCount++;
    }
  }

  if (oddLetterCount <= 1) {
    return true;
  }

  return false;
}
