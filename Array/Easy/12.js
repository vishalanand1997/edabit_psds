/**Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not. */

function isAvgWhole(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return Number.isInteger(result / arr.length);
}

console.log(isAvgWhole([1, 3])); // ➞ true

console.log(isAvgWhole([1, 2, 3, 4])); // ➞ false

console.log(isAvgWhole([1, 5, 6])); // ➞ true

console.log(isAvgWhole([1, 1, 1])); // ➞ true

console.log(isAvgWhole([9, 2, 2, 5])); // ➞ false
