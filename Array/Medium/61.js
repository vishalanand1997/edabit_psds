function miniPeaks(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 || i < arr.length - 1) {
      if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}
console.log(miniPeaks([4, 5, 2, 1, 4, 9, 7, 2])); //➞ [5, 9]
// 5 has neighbours 4 and 2, both are less than 5.

console.log(miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4])); // ➞ [2, 3, 5]

console.log(miniPeaks([1, 2, 3, 4, 5, 6])); // ➞ []
