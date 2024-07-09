/**
 * Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.
 */

function getOnlyEvens(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0 && nums[i] % 2 === 0) {
      result.push(nums[i]);
    }
  }
  return result;
}
console.log(getOnlyEvens([1, 3, 2, 6, 4, 8])); //➞ [2, 4]

console.log(getOnlyEvens([0, 1, 2, 3, 4])); //➞ [0, 2, 4]

console.log(getOnlyEvens([1, 2, 3, 4, 5])); //➞ []
