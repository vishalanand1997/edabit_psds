function measureDepth(arr) {
  let depth = 0;
  const values = JSON.stringify(arr);
  for (let i = 0; i < values.length; i++) {
    if (values[i] == "[") {
      depth += 1;
    }
  }
  return depth;
}
console.log(measureDepth([])); //➞ 1

console.log(measureDepth([[]])); // ➞ 2

console.log(measureDepth([[[]]])); // ➞ 3

console.log(measureDepth([[[[[[[[[[[]]]]]]]]]]])); //➞ 11
