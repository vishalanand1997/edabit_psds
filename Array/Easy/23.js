/**Given an array and an integer n, return the sum of the first n numbers in the array. */
function sliceSum(arr, n) {
  let result = 0;
  if (n === 0) return 0;
  for (let i = 0; i < n; i++) {
    result += arr[i];
  }
  return result;
}
console.log(sliceSum([1, 3, 2], 2)); //➞ 4

console.log(sliceSum([4, 2, 5, 7], 4)); //➞ 18

console.log(sliceSum([3, 6, 2], 0)); //➞ 0
