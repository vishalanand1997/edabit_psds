/**Create a function that returns only strings with unique characters. */
function filterUnique(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let str = "";
    for (let j = 0; j < arr[i].length; j++) {
      if (!str.includes(arr[i][j])) {
        str += arr[i][j];
      }
      if (arr[i].length === str.length) {
        result.push(str);
      }
    }
  }
  return result;
}
console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"])); // ➞ ["abc"]
// "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.

console.log(filterUnique(["88", "999", "989", "9988", "9898"])); // ➞ []

console.log(filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"])); //➞ ["ABCDE", "BED", "BAC"]
