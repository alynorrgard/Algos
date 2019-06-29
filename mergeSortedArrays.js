// APPROACH
// - initiate merged array as []
// - while both input arrays have length:
//      - compare first index of each array
//      - if myArray[0] > alicesArray[0]: remove from myArray and add to mergedArray
//      - else: remove from alicesArray and add to mergedArray
// - if myArray still has length:
//      - concatenate myArray at end of mergedArray, and return
// - else if alicesArray still has length:
//      - concatenate alicesArray at end of mergedArray, and return
// - else return mergedArray

function mergeArrays(myArray, alicesArray) {
  let mergedArray = [];

  while (myArray[0] && alicesArray[0]) {
    if (myArray[0] < alicesArray[0]) {
      mergedArray.push(myArray.shift());
    } else {
      mergedArray.push(alicesArray.shift());
    }
  }

  if (myArray.length > 0) {
    mergedArray = [...mergedArray, ...myArray];
    return mergedArray;
  } else if (alicesArray.length > 0) {
    mergedArray = [...mergedArray, ...alicesArray];
    return mergedArray;
  } else {
    return mergedArray;
  }
}
