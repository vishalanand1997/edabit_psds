function pyramidArrays(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(Array(i).fill(i));
  }
  return result;
}
console.log(pyramidArrays(1)); // ➞ [[1]]

console.log(pyramidArrays(3)); // ➞ [[1], [2, 2], [3, 3, 3]]

console.log(pyramidArrays(5)); // ➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]
