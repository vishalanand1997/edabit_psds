/**Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false. */
function hasHiddenFee(prices, t) {
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    const value = +prices[i].replace("$", "");
    sum += value;
  }
  return sum < +t.replace("$", "");
}
console.log(hasHiddenFee(["$2", "$4", "$1", "$8"], "$15")); // ➞ false

console.log(hasHiddenFee(["$1", "$2", "$3"], "$6")); // ➞ false

console.log(hasHiddenFee(["$1"], "$4")); //➞ true
