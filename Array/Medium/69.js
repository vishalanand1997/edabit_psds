/**
 * 
Create a function that takes an array of numbers arr and a number n. Return true if the sum of any two elements is equal to the given number. Otherwise, return false. 
 */
function checkSum(arr, n) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      result.push(arr[i] + arr[j] === n);
    }
  }
  return result.some((item) => item);
}
console.log(checkSum([10, 12, 4, 7, 9, 11], 16)); // ➞ true

console.log(checkSum([4, 5, 6, 7, 8, 9], 13)); // ➞ true

console.log(checkSum([0, 98, 76, 23], 174)); // ➞ true

console.log(checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39)); //➞ false

console.log(checkSum([2, 8, 9, 12, 45, 78], 1)); // ➞ false
