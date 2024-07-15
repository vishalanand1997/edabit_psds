function formatPhoneNumber(numbers) {
  let result = [];
  result += numbers.splice(0, 0, "(");
  return result;
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // ➞ "(123) 456-7890"

console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])); // ➞ "(519) 555-4468"

console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])); // ➞ "(345) 501-2527"
