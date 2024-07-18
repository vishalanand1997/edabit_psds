function mapping(letters) {
  const newObj = {};
  for (let i = 0; i < letters.length; i++) {
    newObj[letters[i]] = letters[i].toUpperCase();
  }
  return newObj;
}
console.log(mapping(["p", "s"])); //➞ { "p": "P", "s": "S" }

console.log(mapping(["a", "b", "c"])); //➞ { "a": "A", "b": "B", "c": "C" }

console.log(mapping(["a", "v", "y", "z"])); //➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
