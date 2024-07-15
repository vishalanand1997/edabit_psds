/**
 * Create a function that determines whether an input value is omnipresent for a given array.
 * A value is omnipresent if it exists in every subarray inside the main array.
 */
let result = [];
function isOmnipresent(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && arr[i].includes(val)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result.every((item) => item);
}
console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    1
  )
); //➞ true
result = [];
console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    6
  )
); //➞ false

result = [];
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5)); //➞ true
result = [];
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6)); //➞ false
