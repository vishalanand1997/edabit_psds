function maxTotal(nums) {
  const firstArr = nums.slice(0, 5);
  const secondArr = nums.slice(5, nums.length);
  let firstSum = 0,
    secondSum = 0;
  for (let i = 0; i < firstArr.length; i++) {
    firstSum += firstArr[i];
    secondSum += secondArr[i];
  }
  if (firstArr < secondArr) {
    return secondSum;
  } else {
    return firstSum;
  }
}

console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])); //➞ 41

console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])); //➞ 100

console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //➞ 40
