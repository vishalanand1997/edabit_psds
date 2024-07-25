/**
 * Clarification
[1, 2, 3, 4] = for first element => sum will be 2+3+4 = [9]
[1, 2, 3, 4] = for second element => sum will be 1+3+4 = [9, 8]
[1, 2, 3, 4] = for third element => sum will be 1+2+4 = [9, 8, 7]
[1, 2, 3, 4] = for fourth element => sum will be 1+2+3 = [9, 8, 7, 6]
 */
function arrEleSum(args) {
  const result = [];
  for (let i = 0; i < args.length; i++) {
    const rest = args
      .filter((_, index) => index !== i)
      .reduce((prev, curr) => prev + curr, 0);
    result.push(rest);
  }
  return result;
}
console.log(arrEleSum([1, 2, 3, 2, 1]));
// ➞ [8, 7, 6, 7, 8]

console.log(arrEleSum([1, 2]));
//  ➞ [2, 1]

console.log(arrEleSum([1, 2, 3]));
//  ➞ [5, 4, 3]

console.log(arrEleSum([1, 2, 3, 4, 5]));
//  ➞ [14, 13, 12, 11, 10]

console.log(arrEleSum([10, 20, 30, 40, 50, 60]));
// ➞ [200, 190, 180, 170, 160, 150]
