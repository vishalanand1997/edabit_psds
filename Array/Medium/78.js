function flattenCurve(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const mean = sum / arr.length;
  return Array(arr.length).fill(mean);
}
console.log(flattenCurve([1, 2, 3, 4, 5])); // ➞ [3, 3, 3, 3, 3]

console.log(flattenCurve([0, 0, 0, 2, 7, 3])); // ➞ [2, 2, 2, 2, 2, 2]

console.log(flattenCurve([4])); // ➞ [4]

console.log(flattenCurve([])); //➞ []
