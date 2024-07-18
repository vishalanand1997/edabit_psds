/**
 * Create a function that takes a string, removes all "special" characters (e.g. ., !, @, #, $, %, ^, &, \, *, (, )) and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
 */
function removeSpecialCharacters(str) {
  return str.replaceAll(/[!.@#$%^&\*()]/g, "");
}
console.log(removeSpecialCharacters("The quick brown fox!")); //➞ "The quick brown fox"

console.log(removeSpecialCharacters("%fd76$fd(-)6GvKlO.")); // ➞ "fd76fd-6GvKlO"

console.log(removeSpecialCharacters("D0n$c sed 0di0 du1")); // ➞ "D0nc sed 0di0 du1"
