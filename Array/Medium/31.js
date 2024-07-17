function uniqueSort(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (result[i] < result[j]) {
        let temp = [];
        temp = result[j];
        result[j] = result[i];
        result[i] = temp;
      }
    }
  }
  return result;
}

console.log(uniqueSort([1, 2, 4, 3])); //➞ [1, 2, 3, 4]

console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])); //➞ [1, 2, 3, 4]

console.log(uniqueSort([6, 7, 3, 2, 1])); //➞ [1, 2, 3, 6, 7]
