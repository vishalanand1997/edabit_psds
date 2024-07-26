function sub(A1, A2) {
  const result = [];
  for (let i = 0; i < A1.length; i++) {
    result.push(A1[i].map((item, index) => item - A2[i][index]));
  }
  return result;
}
console.log(
  sub(
    [
      [1, 4, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
  )
);
//   ➞ [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0]
//   ]
