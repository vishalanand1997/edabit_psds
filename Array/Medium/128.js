function getProducts(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let value = 1;
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        value = value * arr[j];
      }
    }
    sum += value;
    result.push(sum);
  }
  return result;
}
console.log(getProducts([1, 7, 3, 4]));
//  ➞ [84, 12, 28, 21]

console.log(getProducts([1, 2, 6, 5, 9]));
// ➞ [540, 270, 90, 108, 60]

console.log(getProducts([1, 2, 3, 0, 5]));
//  ➞ [0, 0, 0, 30, 0]
