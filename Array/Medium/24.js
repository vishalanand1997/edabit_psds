function calculateLosses(obj) {
  if (Object.keys(obj).length === 0) return "Lucky you!";
  let stolenItemSum = 0;
  for (let key in obj) {
    stolenItemSum += obj[key];
  }
  return stolenItemSum;
}

const stolenItems1 = {
  tv: 30,
  skate: 20,
  stereo: 50,
}; //➞ 100
console.log(calculateLosses(stolenItems1));
const stolenItems2 = {
  painting: 20000,
}; //➞ 20000

console.log(calculateLosses(stolenItems2));
const stolenItems3 = {}; //➞ "Lucky you!"

console.log(calculateLosses(stolenItems3));
