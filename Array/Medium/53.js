let sum = 0;
function sumArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sumArray(arr[i]);
    } else {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumArray([1, 2, 3])); // ➞ 6
// 1 + 2 + 3 = 6
sum = 0;

console.log(sumArray([1, [2, [1]], 3])); // ➞ 7
// 1 + 2 + 1 + 3 = 7
