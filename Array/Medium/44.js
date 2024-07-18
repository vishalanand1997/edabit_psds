function parallelResistance(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += 1 / arr[i];
  }
  return parseFloat(1 / sum) ? +(1 / sum).toFixed(2) : 1 / sum;
}
console.log(parallelResistance([6, 3, 6])); //➞ 1.5

// 1/RTotal = 1/6 + 1/3 + 1/6
// 1/RTotal = 2/3
// RTotal = 3/2 = 1.5
console.log(parallelResistance([6, 3])); // ➞ 2

console.log(parallelResistance([10, 20, 10])); //➞ 4

console.log(parallelResistance([500, 500, 500])); // ➞ 166.6
// Round to the nearest decimal place
