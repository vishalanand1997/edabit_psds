/**
 * Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays (e.g. [[], [], []]), each containing y number of item z.

x Number of subarrays contained within the main array.
y Number of items contained within each subarray.
z Item contained within each subarray.
 */

function matrix(x, y, z) {
  const result = [];
  for (let i = 0; i < x; i++) {
    result.push(Array(y).fill(z));
  }
  return result;
}
console.log(matrix(3, 2, 3)); //➞ [[3, 3], [3, 3], [3, 3]]

console.log(matrix(2, 1, "edabit")); //➞ [["edabit"], ["edabit"]]

console.log(matrix(3, 2, 0)); //➞ [[0, 0], [0, 0], [0, 0]]
