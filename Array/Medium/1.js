/**Create a function which returns the number of true values there are in an array. */
function countTrue(arr) {
  let trueCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      trueCount += 1;
    }
  }
  return trueCount;
}
console.log(countTrue([true, false, false, true, false])); // ➞ 2

console.log(countTrue([false, false, false, false])); //➞ 0

console.log(countTrue([])); //➞ 0
