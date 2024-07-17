/**
 * Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.
 */

function capMe(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(
      arr[i].charAt(0).toUpperCase().concat(arr[i].toLowerCase().slice(1))
    );
  }
  return result;
}
console.log(capMe(["mavis", "senaida", "letty"])); //➞ ["Mavis", "Senaida", "Letty"]

console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"])); //➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"])); //➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
