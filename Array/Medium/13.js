function testJackpot(result) {
  return result.every((item, index) => item === result[0]);
}
console.log(testJackpot(["@", "@", "@", "@"])); //➞ true

console.log(testJackpot(["abc", "abc", "abc", "abc"])); //➞ true

console.log(testJackpot(["SS", "SS", "SS", "SS"])); //➞ true

console.log(testJackpot(["&&", "&", "&&&", "&&&&"])); //➞ false

console.log(testJackpot(["SS", "SS", "SS", "Ss"])); //➞ false
