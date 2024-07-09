/**
 * Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
 */
function numberSplit(n) {
  const value = n / 2;
  if (n % 2 === 0) {
    return [value, value];
  } else {
    return [Math.floor(value), Math.ceil(value)];
  }
}
console.log(numberSplit(4)); //➞ [2, 2]

console.log(numberSplit(10)); //➞ [5, 5]

console.log(numberSplit(11)); //➞ [5, 6]

console.log(numberSplit(-9)); //➞ [-5, -4]
