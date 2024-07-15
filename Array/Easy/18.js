/**
 * Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).

Given a higher bound num, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.

 */

function amplify(num) {
  return Array.from({ length: num }, (item, index) => {
    const count = index + 1;
    return count % 4 === 0 ? count * 10 : count;
  });
}

console.log(amplify(4)); //➞ [1, 2, 3, 40]
// Create a sequence from 1 to 4
// 4 is exactly divisible by 4, so it will be 4*10 = 40

console.log(amplify(3)); //➞ [1, 2, 3]
// Create a sequence from 1 to 3
// There are no numbers that can be exactly divided by 4

console.log(amplify(25)); //➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// Create a sequence from 1 to 25
// The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.
