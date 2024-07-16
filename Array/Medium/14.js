function findNemo(sentence) {
  const sentenceValue = sentence.split(" ");
  const index = sentenceValue.indexOf("Nemo");
  return `I found Nemo at ${index + 1}!`;
}
console.log(findNemo("I am finding Nemo !")); //➞ "I found Nemo at 4!"

console.log(findNemo("Nemo is me")); //➞ "I found Nemo at 1!"

console.log(findNemo("I Nemo am")); //➞ "I found Nemo at 2!"
