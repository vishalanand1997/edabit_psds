/**
 *
 * Create a function that always returns true for every item in a given array. However, if an element is the word "flick", switch to always returning the opposite boolean value.
 */
function flickSwitch(arr) {
  let flickSwitch = true;
  return arr.map((item) =>
    item === "flick" ? (flickSwitch = !flickSwitch) : flickSwitch
  );
}
console.log(flickSwitch(["edabit", "flick", "eda", "bit"])); //➞ [true, false, false, false]

console.log(flickSwitch(["flick", 11037, 3.14, 53])); //➞ [false, false, false, false]

console.log(flickSwitch([false, false, "flick", "sheep", "flick"])); //➞ [true, true, false, false, true]
