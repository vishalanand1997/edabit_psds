/**
 * 
Create a function which returns the type of triangle, given the side lengths. Return the following values if they match the criteria.

No sides equal: "scalene"
Two sides equal: "isosceles"
All sides equal: "equilateral"
Less or more than 3 sides given: "not a triangle"
 */
function getTriangleType(arr) {
  if (arr.length > 3 || arr.length < 3) {
    return "not a triangle";
  }
  if (arr.every((item) => item === arr[0])) return "equilateral";
  const newObj = {};
  for (let i = 0; i < arr.length; i++) {
    newObj[arr[i]] = newObj[arr[i]] ? newObj[arr[i]] + 1 : 1;
  }
  for (let key in newObj) {
    if (newObj[key] >= 2) return "isosceles";
    else return "scalene";
  }
}
console.log(getTriangleType([2, 6, 5]));
//  ➞ "scalene"

console.log(getTriangleType([4, 4, 7]));
//  ➞ "isosceles"

console.log(getTriangleType([8, 8, 8]));
// ➞ "equilateral"

console.log(getTriangleType([3, 5, 5, 2]));
//  ➞ "not a triangle"
