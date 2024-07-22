function findSingleNumber(numbers) {
  if (numbers.length === 0) return null;
  const newObj = {};
  for (let i = 0; i < numbers.length; i++) {
    newObj[numbers[i]] = newObj[numbers[i]] ? newObj[numbers[i]] + 1 : 1;
  }
  for (let key in newObj) {
    if (newObj[key] === 1) return +key;
  }
}
console.log(findSingleNumber([2, 2, 2, 3, 4, 4, 4])); //➞ 3

console.log(findSingleNumber([2])); // ➞ 2

console.log(findSingleNumber([])); //➞ null

console.log(
  findSingleNumber([
    7, 13, 3, 6, 5, 4, 4, 13, 5, 3, 6, 7, 6, 5, 3, 13, 4, 7, 13, 5, 7, 4, 3, 6,
    8, 4, 3, 7, 5, 6, 13,
  ])
); //➞ 8

console.log(
  findSingleNumber([
    1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 101,
    4, 3, 1, 5, 6, 2,
  ])
); //➞ 101
