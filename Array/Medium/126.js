function mergeArrays(a, b) {
  const result = [];
  for (let i = 0; i < b.length; i++) {
    result.push(a[i], b[i]);
  }
  return result.filter((item) => item);
}

console.log(mergeArrays(["f", "d", "w", "t"], [5, 3, 7, 8]));
// ➞ ["f", 5, "d", 3, "w", 7, "t", 8]

console.log(mergeArrays([1, 2, 3], ["a", "b", "c", "d", "e", "f"]));
// ➞ [1, "a", 2, "b", 3, "c", "d", "e", "f"]

console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]));
// ➞ ["a", 1, "b", 2, "c", 3, "d", 4, "e", 5]
