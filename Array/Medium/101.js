function isEqual(arr) {
  const firstVal = arr[0].toString();
  const secondVal = arr[1].toString();
  let firstSum = 0,
    secondSum = 0;
  for (let i = 0; i < firstVal.length; i++) {
    firstSum += +firstVal[i];
  }
  for (let i = 0; i < secondVal.length; i++) {
    secondSum += +secondVal[i];
  }
  return firstSum === secondSum;
}
console.log(isEqual([105, 42]));
//  ➞ true
// # 1 + 0 + 5 = 6
// # 4 + 2 = 6

console.log(isEqual([21, 35]));
// ➞ false

console.log(isEqual([0, 0]));
//  ➞ true
