function calculateArrowhead(arr) {
  let rightArrow = 0,
    leftArrow = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === ">") {
        rightArrow += 1;
      } else if (arr[i][j] === "<") {
        leftArrow += 1;
      }
    }
  }
  if (rightArrow > leftArrow) {
    const value = rightArrow - leftArrow;
    return ">".repeat(value);
  } else {
    const value = leftArrow - rightArrow;
    return "<".repeat(value);
  }
}

console.log(calculateArrowhead([">>>>", "<", "<", "<"]));
// ➞ ">"

console.log(calculateArrowhead([">", "<", ">>", "<", "<<<"]));
// ➞ "<<"

console.log(calculateArrowhead([">>>", "<<<"]));
// ➞ ""
