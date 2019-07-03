// APPROACH (optimizing for space)
// - sort array
// - loop through array
//      - if the current integer = the integer after it, return integer
// - return 'no duplicates found'

function findRepeat(numbers) {
  numbers.sort();

  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];

    if (currentNum === numbers[i + 1]) {
      return currentNum;
    }
  }

  return 'no duplicates found';
}
