function sharedLetters(str1, str2) {
  let counter = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i])) {
      counter++;
    }
  }
  return counter;
}

console.log(sharedLetters("apple", "meaty"));
// ➞ 2
// Since "ea" is shared between "apple" and "meaty".

console.log(sharedLetters("fan", "forsook"));
//  ➞ 1

console.log(sharedLetters("spout", "shout"));
// ➞ 4
