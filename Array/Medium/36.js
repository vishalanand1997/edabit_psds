/**
 * 
 In order to work properly, the function should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5. 
 */
function hackerSpeak(str) {
  return str
    .replaceAll("a", 4)
    .replaceAll("e", 3)
    .replaceAll("i", 1)
    .replaceAll("o", 0)
    .replaceAll("s", 5);
}
console.log(hackerSpeak("javascript is cool")); //➞ "j4v45cr1pt 15 c00l"

console.log(hackerSpeak("programming is fun")); //➞ "pr0gr4mm1ng 15 fun"

console.log(hackerSpeak("become a coder")); //➞ "b3c0m3 4 c0d3r"
