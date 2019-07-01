// APPROACH
// - loop through array
//      - pick randomIndex = getRandom(floor = 0, ceiling = array.length - 1)
//      - swap elements at index i and randomIndex
// - return array

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffleInPlace(array) {
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    let randomIndex = getRandom(0, array.length - 1);

    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
