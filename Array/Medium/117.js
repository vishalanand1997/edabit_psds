function digitDistance(num1, num2) {
  const Num1 = num1.toString();
  const Num2 = num2.toString();
  let sum = 0;
  if (Num1 === Num2) return 0;
  if (Num1.length !== Num2.length) return;
  for (let i = 0; i < Num1.length; i++) {
    sum += Math.abs(+Num1[i] - +Num2[i]);
  }
  return sum;
}
console.log(digitDistance(234, 489));
//  ➞ 12
// Since |2 - 4| + |3 - 8| + |4 - 9| = 2 + 5 + 5
console.log(digitDistance(121, 599));
// ➞ 19

console.log(digitDistance(12, 12));
//  ➞ 0

console.log(digitDistance(10, 20));
//  ➞ 1
