function diceGame(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}
console.log(
  diceGame([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
); //➞ 21

console.log(
  diceGame([
    [1, 1],
    [5, 6],
    [6, 4],
  ])
); //➞ 0

console.log(
  diceGame([
    [4, 5],
    [4, 5],
    [4, 5],
  ])
); //➞ 27
