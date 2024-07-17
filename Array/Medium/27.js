function lineLength([x1, y1], [x2, y2]) {
  return +Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2).toFixed(2);
}
console.log(lineLength([15, 7], [22, 11])); //➞ 8.06

console.log(lineLength([0, 0], [0, 0])); //➞ 0

console.log(lineLength([0, 0], [1, 1])); //➞ 1.41
