function transformUpvotes(str) {
  const values = str
    .split(" ")
    .map((item) =>
      parseInt(+item) ? +item : +item.replaceAll("k", "") * 1000
    );
  return values;
}
console.log(transformUpvotes("6.8k 13.5k")); //➞ [6800, 13500]

console.log(transformUpvotes("5.5k 8.9k 32")); //➞ [5500, 8900, 32]

console.log(transformUpvotes("20.3k 3.8k 7.7k 992")); // ➞ [20300, 3800, 7700, 992]
