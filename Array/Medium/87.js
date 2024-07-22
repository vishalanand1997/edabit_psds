var magnitude = (vector) => {
  return Math.sqrt(
    vector.map((item) => item ** 2).reduce((prev, curr) => prev + curr, 0)
  );
};
console.log(magnitude([3, 4])); //➞ 5

console.log(magnitude([0, 0, -10])); //➞ 10

console.log(magnitude([])); //➞ 0

console.log(magnitude([2, 3, 6, 1, 8])); // ➞ 10.677078252031311
