function countOverlapping(intervals, point) {
  let count = 0;
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] >= point || intervals[i][1] >= point) {
      count++;
    }
  }
  return count;
}

console.log(
  countOverlapping(
    [
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    5
  )
);
// ➞ 0

console.log(
  countOverlapping(
    [
      [1, 2],
      [5, 6],
      [5, 7],
    ],
    5
  )
);
//  ➞ 2

console.log(
  countOverlapping(
    [
      [1, 2],
      [5, 8],
      [6, 9],
    ],
    7
  )
);
// ➞ 2
