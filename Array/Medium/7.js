/**
 * 
Write a function that converts an object into an array of keys and values.
 */
function objectToArray(obj) {
  const result = [];
  for (let key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}
console.log(
  objectToArray({
    D: 1,
    B: 2,
    C: 3,
  })
); //➞ [["D", 1], ["B", 2], ["C", 3]]

console.log(
  objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10,
  })
); //➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
