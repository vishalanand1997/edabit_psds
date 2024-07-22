function isPotentialFriend(set1, set2) {
  if (set1.length && set2.length === 1) {
    return set1[0] === set1[0];
  }
  let counter = 0;
  for (let i = 0; i < set1.length; i++) {
    if (set2.includes(set1[i])) {
      counter++;
    }
  }
  return counter === 2;
}
console.log(
  isPotentialFriend(
    ["sports", "music", "chess"],
    ["coding", "music", "netflix", "chess"]
  )
);
//   ➞ true

console.log(
  isPotentialFriend(
    ["cycling", "technology", "drawing"],
    ["dancing", "drawing"]
  )
);
//    ➞ false

console.log(isPotentialFriend(["history"], ["history"]));
//    ➞ true
