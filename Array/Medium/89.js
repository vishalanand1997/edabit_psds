/**
 * 
Create a function that changes all the elements in an array as follows:
Add 1 to all even integers, nothing to odd integers.
Concatenates "!" to all strings and make the first letter of the word a capital letter.
Changes all boolean values to its opposite.
 */
function changeTypes(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (arr[i] % 2 === 0) {
        result.push(arr[i] + 1);
      } else {
        result.push(arr[i]);
      }
    } else if (typeof arr[i] === "boolean") {
      result.push(!arr[i]);
    } else if (typeof arr[i] === "string") {
      const firstLetter = arr[i].charAt(0).toUpperCase();
      const rest = arr[i].slice(1);
      result.push(firstLetter.concat(rest + "!"));
    }
  }
  return result;
}

console.log(changeTypes(["a", 12, true]));
// ➞ ["A!", 13, false]

console.log(changeTypes([13, "13", "12", "twelve"]));
// ➞ [13, "13!", "12!", "Twelve!"]

console.log(changeTypes([false, "false", "true"]));
// ➞ [true, "False!", "True!"]
