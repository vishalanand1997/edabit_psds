function cumulativeSum(arr) {
  const result = [];
  let prevSum = 0;
  for (let i = 0; i < arr.length; i++) {
    prevSum += arr[i];
    result.push(prevSum)
  }
  return result;
}

console.log(cumulativeSum([1, 2, 3])); //➞ [1, 3, 6]

console.log(cumulativeSum([1, -2, 3])); //➞ [1, -1, 2]

console.log(cumulativeSum([3, 3, -2, 408, 3, 3])); // ➞ [3, 6, 4, 412, 415, 418]
