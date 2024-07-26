function dailyStreak(arr) {
  let counter = 0;
  if (arr.every((item) => !item)) return 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      counter++;
    } else {
      return counter;
    }
  }
  return counter;
}

console.log(dailyStreak([true, true, false, true])); //➞ 2

console.log(dailyStreak([false, false, false])); //➞ 0

console.log(dailyStreak([true, true, true, false, true, true])); // ➞ 3
