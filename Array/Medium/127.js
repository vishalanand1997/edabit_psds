function calculateSum(txt) {
  const values = txt.split("");
  return values.reduce((prev, curr) => prev + curr.charCodeAt(0), 0);
}

function reverseString(txt) {
  return txt.split("").reverse().join("");
}

console.log(calculateSum("lime"));
// ➞ 423
// 108 + 105 + 109 + 101 = 423

console.log(calculateSum("a"));
// ➞ 97
// a = 97

console.log(reverseString("hello"));
// ➞ "olleh"
