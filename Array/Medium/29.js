function progressDays(runs) {
  let counter = 0;
  let nextIndex = 1;
  for (let i = 0; i < runs.length; i++) {
    if (runs[i] < runs[nextIndex]) {
      counter++;
    }
    nextIndex++;
  }
  return counter;
}

console.log(progressDays([3, 4, 1, 2])); //➞ 2
// There are two progress days, (3->4) and (1->2)

console.log(progressDays([10, 11, 12, 9, 10])); // ➞ 3

console.log(progressDays([6, 5, 4, 3, 2, 9])); //➞ 1

console.log(progressDays([9, 9])); //➞ 0
