function letterCounter(arr, letter) {
  let countChar = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === letter) {
        countChar++;
      }
    }
  }
  return countChar;
}

console.log(
  letterCounter(
    [
      ["D", "E", "Y", "H", "A", "D"],
      ["C", "B", "Z", "Y", "J", "K"],
      ["D", "B", "C", "A", "M", "N"],
      ["F", "G", "G", "R", "S", "R"],
      ["V", "X", "H", "A", "S", "S"],
    ],
    "D"
  )
); // ➞ 3

// "D" shows up 3 times: twice in the first row, once in the third row.

console.log(
  letterCounter(
    [
      ["D", "E", "Y", "H", "A", "D"],
      ["C", "B", "Z", "Y", "J", "K"],
      ["D", "B", "C", "A", "M", "N"],
      ["F", "G", "G", "R", "S", "R"],
      ["V", "X", "H", "A", "S", "S"],
    ],
    "H"
  )
); // ➞ 2
