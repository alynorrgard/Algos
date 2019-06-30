// APPROACH
// - initiate pointers for half1 and half2 to start at 0
// - loop over shuffledDeck
//      - if shuffledDeck[i] === half1[pointer1], then increment pointer1 by 1
//      - else if shuffledDeck[i] === half2[pointer2], then increment pointer2 by 1
//      - else return false
// - if loop completes, we know shuffledDeck is a single riffle of half1 and half2, so we can return true

function isSingleRiffle(half1, half2, shuffledDeck) {
  let pointer1 = 0;
  let pointer2 = 0;

  for (let i = 0; i < shuffledDeck.length; i++) {
    if (shuffledDeck[i] === half1[pointer1]) {
      pointer1++;
    } else if (shuffledDeck[i] === half2[pointer2]) {
      pointer2++;
    } else {
      return false;
    }
  }

  return true;
}
