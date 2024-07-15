/*The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.*/

function calculateDifference(obj, limit) {
  let result = 0;
  for (let key in obj) {
    result += obj[key];
  }
  return result - limit;
}
console.log(calculateDifference({ "baseball bat": 20 }, 5)); //➞ 15

console.log(calculateDifference({ skate: 10, painting: 20 }, 19)); //➞ 11

console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)); //➞ 1
