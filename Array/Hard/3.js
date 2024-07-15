const result = [];
function getLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      getLength(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return result.length;
}
// console.log(getLength([1, [2, 3]])); //➞ 3

// console.log(getLength([1, [2, [3, 4]]])); // ➞ 4

// console.log(getLength([1, [2, [3, [4, [5, 6]]]]])); // ➞ 6

console.log(getLength([1, [2], 1, [2], 1])); // ➞ 5
