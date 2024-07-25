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

  if (rightArrow === leftArrow) return "";
    if (rightArrow < leftArrow) {
      const count = leftArrow - rightArrow;
      return "<".repeat(count);
    } else if (rightArrow > leftArrow) {
      const count = rightArrow - leftArrow;
      return ">".repeat(count);
    }
}

console.log(calculateArrowhead([">>>>", "<", "<", "<"]));
// ➞ ">"

console.log(calculateArrowhead([">", "<", ">>", "<", "<<<"]));
// ➞ "<<"

console.log(calculateArrowhead([">>>", "<<<"]));
// ➞ ""
