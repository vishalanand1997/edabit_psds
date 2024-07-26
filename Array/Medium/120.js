function mergeSort(arr1, arr2) {
  const newArr = [...arr1, ...arr2];
  return newArr.sort((a, b) => a - b);
}

console.log(mergeSort([1, 2, 3], [5, 4, 6]));
//  ➞ [1, 2, 3, 4, 5, 6]

console.log(mergeSort([8, 6, 4, 2], [-2, -6, 0, -4]));
//  ➞ [8, 6, 4, 2, 0, -2, -4, -6]

console.log(mergeSort([120, 180, 200], [190, 175, 130]));
//  ➞ [120, 130, 175, 180, 190, 200]
