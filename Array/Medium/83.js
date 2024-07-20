function removeSmallest(arr) {
  const min = Math.min(...arr);
  const indexSmall = arr.findIndex((item) => item === min);
  return arr.filter((item, index) => index !== indexSmall);
}
console.log(removeSmallest([1, 2, 3, 4, 5])); // ➞ [2, 3, 4, 5]

console.log(removeSmallest([5, 3, 2, 1, 4])); //➞ [5, 3, 2, 4]

console.log(removeSmallest([2, 2, 1, 2, 1])); //➞ [2, 2, 2, 1]
