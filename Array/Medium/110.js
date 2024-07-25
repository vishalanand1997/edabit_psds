let result = [];
const countNumber = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      countNumber(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (typeof result[i] === "number") {
      count++;
    }
  }
  return count;
};
console.log(countNumber([["", 17.2, 5, "edabit"]]));
//  ➞ 2
// 17.2 and 5.
result = [];
console.log(countNumber([[[[[2, 14]]], 2, 3, 4]]));
//  ➞ 5
// 2, 14, 2, 3 and 4.
result = [];
console.log(countNumber([["balkot"]]));
// ➞ 0
