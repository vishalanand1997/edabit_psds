function allPrime(nums) {
  return nums.every((item) => item % 2 !== 0);
}
console.log(allPrime([7, 5, 2, 4, 6]));
// ➞ false

console.log(allPrime([2, 3, 5, 7, 13, 17, 19, 23, 29]));
//  ➞ true

console.log(allPrime([1, 5, 3]));
// ➞ false
