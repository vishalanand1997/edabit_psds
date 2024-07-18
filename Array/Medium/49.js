function identicalFilter(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].split("").every((item) => item === arr[i][0])) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]));
// ➞ ["aaaaaa", "d", "eeee"]

console.log(identicalFilter(["88", "999", "22", "545", "133"]));
// ➞ ["88", "999", "22"]

console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]));
// ➞ []
