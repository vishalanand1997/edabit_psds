function mostExpensiveItem(obj) {
  const values = Object.values(obj);
  const max = Math.max(...values);
  for (let key in obj) {
    if (obj[key] === max) return key;
  }
}
console.log(
  mostExpensiveItem({
    piano: 2000,
  })
);
//    ➞ "piano"

console.log(
  mostExpensiveItem({
    tv: 30,
    skate: 20,
  })
);
//   ➞ "tv"

console.log(
  mostExpensiveItem({
    tv: 30,
    skate: 20,
    stereo: 50,
  })
);
//   ➞ "stereo"
