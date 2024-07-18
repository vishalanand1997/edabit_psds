function sumFoundIndexes(arr, n) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumFoundIndexes([0, 3, 3, 0, 0, 3], 3)); // ➞ 8
// The number 3 was found at indexes 1, 2 and 5.
// 8 = 1 + 2 + 5

console.log(sumFoundIndexes([1, 2, 3, 4, 5, 6], 3)); // ➞ 2

console.log(sumFoundIndexes([100, 100, 100, 100, 100], 100)); //➞ 10

console.log(sumFoundIndexes([5, 10, 15, 20], 2)); // ➞ 0
