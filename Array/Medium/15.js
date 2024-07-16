function totalVolume(...boxes) {
  return boxes.reduce(
    (prev, curr) => prev + curr.reduce((prev1, curr1) => prev1 * curr1),
    0
  );
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); // ➞ 63

console.log(totalVolume([2, 2, 2], [2, 1, 1])); //➞ 10

console.log(totalVolume([1, 1, 1])); // ➞ 1
