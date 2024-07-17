/**An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise. */
function isSpecialArray(arr) {
  const evenNums = [];
  const oddNums = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenNums.push(arr[i]);
    } else {
      oddNums.push(arr[i]);
    }
  }
  const evenEveryCheck = evenNums.every((item) => item % 2 === 0);
  const oddEveryCheck = oddNums.every((item) => item % 2 !== 0);
  return evenEveryCheck === oddEveryCheck;
}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])); //➞ true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])); //➞ false
// Index 2 has an odd number 9.

console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])); //➞ false
// Index 3 has an even number 8.
