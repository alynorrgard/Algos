// APPROACH
// - calculate length of array
//      - if length is odd:
//          - calculate middle index
//          - grab character at index left of middle
//          - grab character at index right of middle
//      - else:
//          - calculate middle-floor index (left) and grab its character
//          - grab character at index right of middle-floor
// - swap characters by reassigning index at left to = character at left, and index at right to = character at right
// - move index at left one more place left and index at right one more place right
// - repeat until end (when left index = 0 && right index = length - 1)
// - return array

function reverse(arrayOfChars) {
  let counter = Math.floor(arrayOfChars.length / 2);
  let rightIndex;
  let leftIndex;

  if (arrayOfChars.length % 2 === 1) {
    rightIndex = counter + 1;
    leftIndex = counter - 1;
  } else {
    rightIndex = counter;
    leftIndex = rightIndex - 1;
  }

  while (counter !== 0) {
    let leftChar = arrayOfChars[leftIndex];
    let rightChar = arrayOfChars[rightIndex];
    arrayOfChars[leftIndex] = rightChar;
    arrayOfChars[rightIndex] = leftChar;

    leftIndex = leftIndex - 1;
    rightIndex = rightIndex + 1;

    counter--;
  }

  return arrayOfChars;
}
