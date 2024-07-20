function flipEndChars(str) {
  if (str.length < 2) return "Incompatible.";
  if (str[0] === str[str.length - 1]) return "Two's a pair.";
  if (typeof str === "string") {
    const firstChar = str.charAt(0);
    const lastChar = str[str.length - 1];
    return lastChar + str.slice(1, str.length - 1) + firstChar;
  }
  for (let i = 0; i < str.length; i++) {
    if (typeof str[i] === "number") return "Incompatible.";
  }
}
console.log(flipEndChars("Cat, dog, and mouse.")); //➞ ".at, dog, and mouseC"

console.log(flipEndChars("ada")); //➞ "Two's a pair."

console.log(flipEndChars("Ada")); //➞ "adA"

console.log(flipEndChars("z")); //➞ "Incompatible."

console.log(flipEndChars([1, 2, 3])); //➞ "Incompatible."
