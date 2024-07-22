function scaleTip(arr) {
  const length = (arr.length - 1) / 2;
  const left = arr.slice(0, length);
  const right = arr.slice(length + 1);
  let leftSum = 0,
    rightSum = 0;
  for (let i = 0; i < left.length; i++) {
    leftSum += left[i];
    rightSum += right[i];
  }
  if (leftSum === rightSum) {
    return "balanced";
  } else if (leftSum < rightSum) {
    return "right";
  } else if (leftSum > rightSum) {
    return "left";
  }
}
console.log(scaleTip([0, 0, "I", 1, 1])); // ➞ "right"
// 0 < 2 so it will tip right

console.log(scaleTip([1, 2, 3, "I", 4, 0, 0])); //➞ "left"
// 6 > 4 so it will tip left

console.log(scaleTip([5, 5, 5, 0, "I", 10, 2, 2, 1])); // ➞ "balanced"
// 15 = 15 so it will stay balanced
