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
