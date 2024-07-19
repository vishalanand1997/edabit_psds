function evenOrOdd(str) {
  let evenSum = 0,
    oddSum = 0;
  for (let i = 0; i < str.length; i++) {
    if (+str[i] % 2 === 0) {
      evenSum += +str[i];
    } else {
      oddSum += +str[i];
    }
  }
  return oddSum === evenSum
    ? "Even and Odd are the same"
    : oddSum < evenSum
    ? "Even is greater than Odd"
    : "";
}
console.log(evenOrOdd("22471")); //➞ "Even and Odd are the same"

console.log(evenOrOdd("213613")); //➞ "Even and Odd are the same"

console.log(evenOrOdd("23456")); //➞ "Even is greater than Odd"
