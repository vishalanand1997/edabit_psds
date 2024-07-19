function countPosSumNeg(arr) {
  let countPos = 0,
    sumNegative = 0;
  if (arr.length === 0) return [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      sumNegative += arr[i];
    } else {
      countPos += 1;
    }
  }
  return [countPos, sumNegative];
}
console.log(
  countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
); // ➞ [10, -65]
// There are a total of 10 positive numbers.
// The sum of all negative numbers equals -65.

console.log(countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34])); // ➞ [7, -252]

console.log(countPosSumNeg([91, -4, 80, -73, -28])); // ➞ [2, -105]

console.log(countPosSumNeg([])); // ➞ []
