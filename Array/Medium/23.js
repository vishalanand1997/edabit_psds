/**Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together. */
function matchLastItem(arr) {
  let result = "";

  for (let i = 0; i < arr.length - 1; i++) {
    result += arr[i];
  }
  return result === arr[arr.length - 1];
}
console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"])); //➞ true
// The last item is the rest joined.

console.log(matchLastItem([1, 1, 1, "11"])); //➞ false
// The last item should be "111".

console.log(matchLastItem([8, "thunder", true, "8thundertrue"])); //➞ true
