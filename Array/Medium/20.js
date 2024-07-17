function multiply(arr) {
  const result = [];
  return function (value) {
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * value);
    }
    return result;
  };
}
console.log(multiply([1, 2, 3])(2)); // ➞ [2, 4, 6]

console.log(multiply([4, 6, 5])(10)); //➞ [40, 60, 50]

console.log(multiply([1, 2, 3])(0)); //➞ [0, 0, 0]
