/**Create a function to count the number of 1s in a 2D array. */
function countOnes(matrix) {
  let onesCount = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        onesCount += 1;
      }
    }
  }
  return onesCount;
}
console.log(
  countOnes([
    [1, 0],
    [0, 0],
  ])
); //➞ 1

console.log(
  countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ])
); //➞ 7

console.log(
  countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33],
  ])
); //➞ 2
