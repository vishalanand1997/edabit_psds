function subset(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr2.includes(arr1[i]));
  }
  return result.every((item) => item);
}
console.log(subset([1, 3], [1, 3, 3, 5])); //➞ true

console.log(subset([4, 8, 7], [7, 4, 4, 4, 9, 8])); // ➞ true

console.log(subset([1, 3], [1, 33])); // ➞ false

console.log(subset([1, 3, 10], [10, 8, 8, 8])); // ➞ false
