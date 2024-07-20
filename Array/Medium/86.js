function simpleEncoder(str) {
  let result = "",
    r = "";
  for (let i = 0; i < str.length; i++) {
    if (str.slice([i + 1]).includes(str[i]) || r.includes(str[i])) {
      result += "]";
    } else {
      result += "[";
    }
    r += str[i];
  }
  return result;
}
console.log(simpleEncoder("Mubashir")); //➞ "[[[[[[[["
// '[' for each character

console.log(simpleEncoder("Matt")); //➞ "[[]]"
// ']' for both 't'

console.log(simpleEncoder("eD  aBiT")); //➞ "[[]][[[["
// Two spaces in between
