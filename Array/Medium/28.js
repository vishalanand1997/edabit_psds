function mirror(arr) {
  const result = [...arr];
  for (let i = arr.length - 2; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
console.log(mirror([0, 2, 4, 6])); //➞ [0, 2, 4, 6, 4, 2, 0]

console.log(mirror([1, 2, 3, 4, 5])); //➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

console.log(mirror([3, 5, 6, 7, 8])); //➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]
