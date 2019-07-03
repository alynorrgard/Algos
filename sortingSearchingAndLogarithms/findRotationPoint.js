// APPROACH
// - identify middle index, and compare that word to the one on the left and the one on the right
//      - if the current middle word is "less than" both other words, return its index
//      - else, identify which word is the "lowest" and reassign either the left boundary or right boundary
// - repeat

function findRotationPoint(words) {
  let leftBoundary = 0;
  let rightBoundary = words.length - 1;

  while (leftBoundary !== rightBoundary) {
    let middleIndex = Math.floor(rightBoundary - leftBoundary / 2);
    let middleWord = words[middleIndex];
    let leftWord = words[middleIndex - 1];
    let rightWord = words[middleIndex + 1];

    if (middleWord < leftWord && middleWord < rightWord) {
      return middleIndex;
    } else if (middleWord < rightWord) {
      rightBoundary = middleIndex;
    } else {
      leftBoundary = middleIndex;
    }
  }

  return leftBoundary;
}
