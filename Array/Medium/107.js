function flash([num1, op, num2]) {
  if (op === "x") op = "*";
  if (num2 === 0 && op === "/") return undefined;
  return eval(`${num1}${op}${num2}`);
}
console.log(flash([3, "x", 7])); //➞ 21

console.log(flash([5, "+", 7])); // ➞ 12

console.log(flash([10, "-", 9])); //➞ 1

console.log(flash([10, "/", 0])); // ➞ undefined

console.log(flash([10, "/", 3])); //➞ 3.33
