/**
 * Write two functions:
toArray(), which converts a number to an array of its digits.
toNumber(), which converts an array of digits back to its number.
 */

function toArray(num) {
  const result = [];
  const value = num.toString();
  for (let i = 0; i < value.length; i++) {
    result.push(+value[i]);
  }
  return result;
}

function toNumber(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return +result;
}

console.log(toArray(235)); //➞ [2, 3, 5]

console.log(toArray(0)); //➞ [0]

console.log(toNumber([2, 3, 5])); //➞ 235

console.log(toNumber([0])); //➞ 0
