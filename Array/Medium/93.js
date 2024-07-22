function longestWord(sentence) {
  let max = "";
  const values = sentence.split(" ");
  for (let i = 0; i < values.length; i++) {
    if (values[i].length > max.length) {
      max = values[i];
    }
  }
  return max;
}
console.log(longestWord("Hello darkness my old friend")); // ➞ "darkness"

console.log(longestWord("Hello there mate")); // ➞ "Hello"

console.log(longestWord("Kayla's toy is plastic")); //➞ "Kayla's"
