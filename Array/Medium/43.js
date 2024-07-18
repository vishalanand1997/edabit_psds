/**
 * 
Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:

Adds two (+2) to each odd integer.
Subtracts two (-2) from each even integer.
 */
function evenOddTransform(arr, n) {
  const result = arr;
  if (n === 0) {
    return result;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result[i] = arr[i] - 2;
    } else {
      result[i] = arr[i] + 2;
    }
  }
  return evenOddTransform(result, n - 1);
}
console.log(evenOddTransform([3, 4, 9], 3)); //➞ [9, -2, 15]
// Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]

console.log(evenOddTransform([0, 0, 0], 10)); //➞ [-20, -20, -20]

console.log(evenOddTransform([1, 2, 3], 1)); //➞ [3, 0, 5]
