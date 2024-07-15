const arr = [90, 23, 12, 900, 1000, 2];
let max = -Infinity;
let min = Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  } else if (arr[i] < min) {
    min = arr[i];
  }
}

console.log({ min, max });
