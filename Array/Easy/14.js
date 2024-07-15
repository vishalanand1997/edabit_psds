function sortNumsAscending(arr) {
  if (!arr) return [];
  return arr.sort((a, b) => a - b);
}

console.log(sortNumsAscending([1, 2, 10, 50, 5])); // ➞ [1, 2, 5, 10, 50]

console.log(sortNumsAscending([80, 29, 4, -95, -24, 85])); // ➞ [-95, -24, 4, 29, 80, 85]

console.log(sortNumsAscending(null)); // ➞ []

console.log(sortNumsAscending([])); //➞ []
