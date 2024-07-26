function duplicates(str) {
  const newObj = {};
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (newObj.hasOwnProperty(str[i])) {
      newObj[str[i]] += 1;
    } else {
      newObj[str[i]] = 1;
    }
  }
  for (let key in newObj) {
    if (newObj[key] > 1) {
      sum += newObj[key] - 1;
    }
  }
  return sum;
}

console.log(duplicates("Hello World!"));
// ➞ 3
// "o" = 2, "l" = 3.
// "o" is duplicated 1 extra time and "l" is duplicated 2 extra times.
// Hence 1 + 2 = 3

console.log(duplicates("foobar"));
// ➞ 1

console.log(duplicates("helicopter"));
// ➞ 1

console.log(duplicates("birthday"));
// ➞ 0
// If there are no duplicates, return 0
