function zipIt(women, men) {
  if (women.length !== men.length) return "sizes don't match";
  const result = [];

  for (let i = 0; i < women.length; i++) {
    if (i % 2 === 0) {
      result.push([women[i], men[i]]);
    } else {
      result.push([women[i], men[i]]);
    }
  }
  return result;
}
console.log(zipIt(["Elise", "Mary"], ["John", "Rick"]));
//  ➞ [["Elise", "John"], ["Mary", "Rick"]]

console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]));
//  ➞ "sizes don't match"

console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]));
//  ➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]
