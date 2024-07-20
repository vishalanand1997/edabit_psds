/**
 * 
Create a function that takes in two arrays and returns true if the second array follows the first array by one element, and false otherwise. In other words, determine if the second array is the first array shifted to the right by 1.
 */
function simonSays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i + 1]) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(simonSays([1, 2], [5, 1])); //➞ true

console.log(simonSays([1, 2], [5, 5])); //➞ false

console.log(simonSays([1, 2, 3, 4, 5], [0, 1, 2, 3, 4])); // ➞ true

console.log(simonSays([1, 2, 3, 4, 5], [5, 5, 1, 2, 3])); // ➞ false
