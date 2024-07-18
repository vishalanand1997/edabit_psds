function warOfNumbers(arr) {
  const oddNums = [];
  const evenNums = [];
  let oddSum = 0,
    evenSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenNums.push(arr[i]);
    } else {
      oddNums.push(arr[i]);
    }
  }

  for (let i = 0; i < evenNums.length; i++) {
    if (i % 2 === 0) {
      evenSum += evenNums[i];
      evenSum += oddNums[i];
    } else {
      oddSum += evenNums[i] || 0;
      oddSum += oddNums[i] || 0;
    }
  }
    return Math.abs(oddSum - evenSum);
}
console.log(warOfNumbers([2, 8, 7, 5])); //➞ 2
// 2 + 8 = 10
// 7 + 5 = 12
// 12 is larger than 10
// So we return 12 - 10 = 2

console.log(warOfNumbers([12, 90, 75])); //➞ 27

console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243])); //➞ 168
