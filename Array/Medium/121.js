function median(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return Math.ceil(sum/nums.length);
}

console.log(median([1, 2, 4, 5, 6, 8, 8, 8, 10]));
// ➞ 6

console.log(median([2, 2, 6, 8, 8, 10, 10]));
// ➞ 8

console.log(median([1, 2, 2, 4, 7, 8, 9, 10]));
//  ➞ 5.5
