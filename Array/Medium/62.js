function evenLast(arr) {
  if (arr.length === 0) return 0;
  let evenSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenSum += arr[i];
    }
  }
  return evenSum * arr[arr.length - 1];
}
console.log(evenLast([2, 3, 4, 5])); // ➞ 30
// (2 + 4) * 5 ➞ 30

console.log(evenLast([1, 4, 5, 6, 7, 2, 3])); // ➞ 48
// (1 + 5 + 7 + 3) * 3 ➞ 48

console.log(evenLast([])); //➞ 0

console.log(evenLast([1, 3, 3, 1, 10])); //➞ 140

console.log(evenLast([-11, 3, 3, 1, 10])); //➞ 20
