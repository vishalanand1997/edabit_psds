/**
Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ). */
function seriesResistance(arr) {
  const result = arr.reduce((prev, currVal) => prev + currVal, 0);
  return `${result.toFixed(1)} ohms`;
}
console.log(seriesResistance([1, 5, 6, 3])); // ➞ "15 ohms"

console.log(seriesResistance([16, 3.5, 6])); // ➞ "25.5 ohms"

console.log(seriesResistance([0.5, 0.5])); // "1.0 ohms"
