function puzzlePieces(a1, a2) {
  if (a1.length !== a2.length) return false;
  const result = [];
  let sum = 0;
  for (let i = 0; i < a1.length; i++) {
    sum = a1[i] + a2[i];
    result.push(sum);
  }
  return result.every((item) => item);
}
console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1])); //➞ true
// 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// Both arrays sum to [5, 5, 5, 5]

console.log(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6])); // ➞ true

console.log(puzzlePieces([1, 2], [-1, -1])); //➞ false

console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10])); //➞ false
