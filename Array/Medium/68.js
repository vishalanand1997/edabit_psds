function sumOddAndEven(arr) {
  let sumOdd = 0,
    sumEven = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEven += arr[i];
    } else {
      sumOdd += arr[i];
    }
  }
  return [sumEven, sumOdd];
}

console.log(sumOddAndEven([1, 2, 3, 4, 5, 6])); //➞ [12, 9]
// 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9

console.log(sumOddAndEven([-1, -2, -3, -4, -5, -6])); //➞ [-12, -9]

console.log(sumOddAndEven([0, 0])); //➞ [0, 0]
