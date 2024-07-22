function squarePatch(n) {
  if (n === 0) return [];
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(Array(n).fill(n));
  }
  return result
}
console.log(squarePatch(3));
//  ➞ [
//     [3, 3, 3],
//     [3, 3, 3],
//     [3, 3, 3]
//   ]

console.log(squarePatch(5));
//   ➞ [
//     [5, 5, 5, 5, 5],
//     [5, 5, 5, 5, 5],
//     [5, 5, 5, 5, 5],
//     [5, 5, 5, 5, 5],
//     [5, 5, 5, 5, 5]
//   ]

console.log(squarePatch(1));
//    ➞ [
//     [1]
//   ]

console.log(squarePatch(0));
//    ➞ []
