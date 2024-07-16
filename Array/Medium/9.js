// Fix this incorrect code so that all tests pass!
function flatten(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.concat(arr[i]);
  }
  return arr2;
}

console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
);
// Expected: [1, 2, 3, 4]

console.log(
  flatten([
    ["a", "b"],
    ["c", "d"],
  ])
);
// Expected: ["a", "b", "c", "d"]

console.log(
  flatten([
    [true, false],
    [false, false],
  ])
);
// Expected: [true, false, false, false]
