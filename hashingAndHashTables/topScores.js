// APPROACH
// - initialize an array scoreCounts of length = highestPossibleScore.length + 1, filled with 0s
// - initialize an array sortedScores of length = unsortedScores.length
// - loop through unsortedScores
//      - grab currentScore = unsortedScores[i]
//      - increment the value at scoreCounts[currentScore] by 1
// - loop through scoreCounts
//      - if scoreCounts[j] > 0, add j to end of sortedScores scoreCounts[j] number of times
// - return sortedScores

function sortScores(unsortedScores, highestPossibleScore) {
  let scoreCounts = new Array(highestPossibleScore + 1).fill(0);
  let sortedScores = [];

  for (let i = 0; i < unsortedScores.length; i++) {
    const currentScore = unsortedScores[i];
    scoreCounts[currentScore]++;
  }

  for (let j = highestPossibleScore; j >= 0; j--) {
    let currentCount = scoreCounts[j];

    if (currentCount > 0) {
      for (let k = currentCount; k > 0; k--) {
        sortedScores.push(j);
      }
    }
  }
  return sortedScores;
}
