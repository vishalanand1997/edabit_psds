function sumOfTwo(a, b, v) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] + b[j] === v) {
        return true;
      }
    }
  }
  return false;
}

console.log(sumOfTwo([1, 2], [4, 5, 6], 5));
// ➞ true

console.log(sumOfTwo([1, 2], [4, 5, 6], 8));
// ➞ true

console.log(sumOfTwo([1, 2], [4, 5, 6], 3));
// ➞ false

console.log(sumOfTwo([1, 2], [4, 5, 6], 9));
// ➞ false
