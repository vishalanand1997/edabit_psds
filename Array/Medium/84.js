function upwardTrend(arr) {
  const result = [],
    r2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") return "Strings not permitted!";
    result.push(arr[i]);
    r2.push(!result.some((item) => item > arr[i]));
  }
  return r2.every((item)=>item);
}
console.log(upwardTrend([1, 2, 3, 4])); //➞ true

console.log(upwardTrend([1, 2, 6, 5, 7, 8])); //➞ false

console.log(upwardTrend([1, 2, 3, "4"])); //➞ "Strings not permitted!"

console.log(upwardTrend([1, 2, 3, 6, 7])); //➞ true
