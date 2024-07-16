/**Return true if the marathon is 25 miles long, otherwise, return false. */
function marathonDistance(d) {
  let sumMiles = 0;
  for (let i = 0; i < d.length; i++) {
    sumMiles += Math.abs(d[i]);
  }
  return sumMiles >= 25;
}
console.log(marathonDistance([1, 2, 3, 4])); //➞ false

console.log(marathonDistance([1, 9, 5, 8, 2])); //➞ true

console.log(marathonDistance([-6, 15, 4])); //➞ true
