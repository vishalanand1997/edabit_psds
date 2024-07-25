function getIndices(arr, el) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      result.push(i);
    }
  }
  return result;
}
console.log(getIndices(["a", "a", "b", "a", "b", "a"], "a"));
//  ➞ [0, 1, 3, 5]

console.log(getIndices([1, 5, 5, 2, 7], 7));
//  ➞ [4]

console.log(getIndices([1, 5, 5, 2, 7], 5));
//  ➞ [1, 2]

console.log(getIndices([1, 5, 5, 2, 7], 8));
// ➞ []
