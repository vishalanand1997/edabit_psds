/**A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain: */
function factorChain(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] % arr[i] === 0) {
        result.push(true);
      } else {
        result.push(false);
      }
    }
  }
  return result.every((item) => item);
}
console.log(factorChain([1, 2, 4, 8, 16, 32])); // ➞ true

console.log(factorChain([1, 1, 1, 1, 1, 1])); // ➞ true

console.log(factorChain([2, 4, 6, 7, 12])); // ➞ false

console.log(factorChain([10, 1])); // ➞ false
