function numOfSubbarrays(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      return arr.length;
    } else {
      return 0;
    }
  }
}
console.log(numOfSubbarrays([[1, 2, 3]])); //➞ 1

console.log(
  numOfSubbarrays([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ])
); //➞ 3

console.log(
  numOfSubbarrays([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ])
); //➞ 4

console.log(numOfSubbarrays([1, 2, 3])); //➞ 0
