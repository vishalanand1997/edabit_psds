function ascDesNone(arr, str) {
  if (str === "Asc") {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }
    }
    return arr;
  } else if (str === "Des") {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }
    }
    return arr;
  } else {
    return arr;
  }
}
console.log(ascDesNone([4, 3, 2, 1], "Asc")); //➞ [1, 2, 3, 4]

console.log(ascDesNone([7, 8, 11, 66], "Des")); //➞ [66, 11, 8, 7]

console.log(ascDesNone([1, 2, 3, 4], "None")); // ➞ [1, 2, 3, 4]
