function probability(arr, num) {
  const lengthFavourableItems = arr.filter((item) => item >= num).length;
  return +((100 * lengthFavourableItems) / arr.length).toFixed(1);
}

console.log(probability([5, 1, 8, 9], 6)); //➞ 50.0

console.log(probability([7, 4, 17, 14, 12, 3], 16)); //➞ 16.7

console.log(probability([4, 6, 2, 9, 15, 18, 8, 2, 10, 8], 6)); //➞ 70.0
