/**
 * Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
 */

function getAbsSum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return Math.abs(result);
}

console.log(getAbsSum([2, -1, 4, 8, 10])); // ➞ 23

console.log(getAbsSum([-3, -4, -10, -2, -3])); // ➞ 22

console.log(getAbsSum([2, 4, 6, 8, 10])); // ➞ 30

console.log(getAbsSum([-1])); // ➞ 1
