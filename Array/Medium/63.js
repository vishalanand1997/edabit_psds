function spinAround(r) {
  let rightCount = 0,
    leftCount = 0;
  for (let i = 0; i < r.length; i++) {
    if (r[i] === "right") {
      rightCount++;
    } else {
      leftCount++;
    }
  }
  return Math.abs(90 * rightCount - 90 * leftCount) / 360;
}
console.log(spinAround(["right", "right", "right", "right", "left", "right"])); // ➞ 1
// # You spun right 4 times (90 * 4 = 360)
// # You spun left once (360 - 90 = 270)
// # But you spun right once more to make a full rotation (270 + 90 = 360)

console.log(spinAround(["left", "right", "left", "right"])); // ➞ 0

console.log(
  spinAround([
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
  ])
); // ➞ 2

console.log(spinAround(["left", "left", "left", "left"])); // 1
