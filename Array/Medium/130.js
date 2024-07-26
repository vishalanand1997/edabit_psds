function accumulatingProduct(arr) {
  if (arr.length === 0) return [];
  const result = [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    let mult = arr[i] * arr[i + 1];
    result.push(mult);
  }
  return result.filter((item) => !isNaN(item));
}

console.log(accumulatingProduct([1, 2, 3, 4]));
// ➞ [1, 2, 6, 24]
// [1, 2, 6, 24] can be written as [1, 1 x 2, 1 x 2 x 3, 1 x 2 x 3 x 4]

console.log(accumulatingProduct([1, 5, 7]));
//  ➞ [1, 5, 35]

console.log(accumulatingProduct([1, 0, 1, 0]));
//  ➞ [1, 0, 0, 0]

console.log(accumulatingProduct([]));
//  ➞ []
