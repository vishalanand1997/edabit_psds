function reverseArr(num) {
  let values = num.toString().split("");
  const result = [];
  for (let i = values.length - 1; i >= 0; i--) {
    result.push(+values[i]);
  }
  return result;
}
console.log(reverseArr(1485979)); // ➞ [9, 7, 9, 5, 8, 4, 1]

console.log(reverseArr(623478)); // ➞ [8, 7, 4, 3, 2, 6]

console.log(reverseArr(12345)); // ➞ [5, 4, 3, 2, 1]
