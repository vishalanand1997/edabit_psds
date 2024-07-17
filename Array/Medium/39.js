function findNaN(number) {
  if (!number.includes(NaN)) return -1;
  for (let i = 0; i < number.length; i++) {
    if (isNaN(number[i])) {
      return i;
    }
  }
}
console.log(findNaN([1, 2, NaN])); //➞ 2

console.log(findNaN([NaN, 1, 2, 3, 4])); //➞ 0

console.log(findNaN([0, 1, 2, 3, 4])); // ➞ -1
