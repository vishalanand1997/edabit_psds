function incrementToTop(arr) {
  const max = Math.max(...arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += max - arr[i];
  }
  return sum;
}
console.log(incrementToTop([3, 4, 5])); // ➞ 3
// Maximal element in the array is 5.
// To transform 3 to 5 requires 2 steps: 3 -> 4, 4 -> 5.
// To transform 4 to 5 requires 1 step: 4 -> 5.
// Total steps required is 3.

console.log(incrementToTop([4, 3, 4])); // ➞ 1
// Maximal element in the array is 4.
// To transform 3 to 4 requires 1 steps: 3 -> 4.
// Total steps required is 1.

console.log(incrementToTop([3, 3, 3])); // ➞ 0

console.log(incrementToTop([3, 10, 3])); // ➞ 14
