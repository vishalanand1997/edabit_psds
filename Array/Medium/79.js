function fruitSalad(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const length = Math.floor(arr[i].length / 2);
    result.push(arr[i].slice(0, length), arr[i].slice(length));
  }
  return result.sort((a, b) => a.localeCompare(b)).join("");
}
console.log(fruitSalad(["apple", "pear", "grapes"])); //➞ "apargrapepesple"

// Chunks: ["ap", "ple", "pe", "ar", "gra", "pes"]
// Sorted chunks: ["ap", "ar", "gra", "pe", "pes", "ple"]
// Final string: "apargrapepesple"

console.log(fruitSalad(["apple", "pear", "grapes"])); //➞ "apargrapepesple"

console.log(fruitSalad(["raspberries", "mango"])); //➞ "erriesmangoraspb"

console.log(fruitSalad(["banana"])); //➞ "anaban"
