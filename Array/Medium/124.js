function howManyMissing(arr) {
  let counter = 0;
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      counter++;
    }
  }
  return counter;
}
console.log(howManyMissing([1, 2, 3, 8, 9]));
//  ➞ 4
console.log(howManyMissing([1, 3]));
// ➞ 1

console.log(howManyMissing([7, 10, 11, 12]));
//  ➞ 2

console.log(howManyMissing([1, 3, 5, 7, 9, 11]));
// ➞ 5

console.log(howManyMissing([5, 6, 7, 8]));
//  ➞ 0
