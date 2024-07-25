/**
 * I: abcd
 * O: a ab abc abcd b bc bcd c cd d
 */

const subStringPartition = (str) => {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    let strVal = str[i];
    result.push(strVal);
    for (let j = i + 1; j < str.length; j++) {
      strVal += str[j];
      result.push(strVal);
    }
  }
  return result.join(" ");
};

console.log(subStringPartition("abcd"));
