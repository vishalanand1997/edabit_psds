/**Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7. */
function jazzify(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + 7);
  }
  return result;
}
console.log(jazzify(["G", "F", "C"])); //➞ ["G7", "F7", "C7"]

console.log(jazzify(["Dm", "G", "E", "A"])); //➞ ["Dm7", "G7", "E7", "A7"]

console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])); //➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

console.log(jazzify([])); //➞ []
