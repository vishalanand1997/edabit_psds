function moveToEnd(arr, el) {
  const retrived = [],
    result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      retrived.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return [...result, ...retrived];
}
console.log(moveToEnd([1, 3, 2, 4, 4, 1], 1)); //➞ [3, 2, 4, 4, 1, 1]
// Move all the 1s to the end of the array.

console.log(moveToEnd([7, 8, 9, 1, 2, 3, 4], 9)); //➞ [7, 8, 1, 2, 3, 4, 9]

console.log(moveToEnd(["a", "a", "a", "b"], "a")); //➞ ["b", "a", "a", "a"]
