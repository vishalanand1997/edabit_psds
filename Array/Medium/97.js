function countTowers(towers) {
  let countTower = 0;
  towers[towers.length - 1].map(
    (item) => (countTower = item.split("   ").length)
  );
  return countTower;
}

console.log(
  countTowers([
    ["     ##         "],
    ["##   ##        ##"],
    ["##   ##   ##   ##"],
    ["##   ##   ##   ##"],
  ])
);
//    ➞ 4

console.log(
  countTowers([
    ["                         ##"],
    ["##             ##   ##   ##"],
    ["##        ##   ##   ##   ##"],
    ["##   ##   ##   ##   ##   ##"],
  ])
);
//   ➞ 6

console.log(countTowers([["##"], ["##"]]));
//    ➞ 1
