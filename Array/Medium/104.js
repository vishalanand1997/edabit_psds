function multiply(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(Array(arr.length).fill(arr[i]));
  }
  return result;
}

console.log(multiply([4, 5]));
//  ➞ [[4, 4], [5, 5]]

console.log(multiply(["*", "%", "$"]));
// ➞ [["*", "*", "*"], ["%", "%", "%"], ["$", "$", "$"]]

console.log(multiply(["A", "B", "C", "D", "E"]));
// ➞ [["A", "A", "A", "A", "A"], ["B", "B", "B", "B", "B"], ["C", "C", "C", "C", "C"], ["D", "D", "D", "D", "D"], ["E", "E", "E", "E", "E"]]
