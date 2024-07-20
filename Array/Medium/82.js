function removeEnemies(names, enemies) {
  return names.filter((item) => !enemies.includes(item));
}
console.log(removeEnemies(["Fred"], [])); //➞ ["Fred"]

console.log(removeEnemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"])); //➞ ["Adam", "Tanya"]

console.log(removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"])); //➞ ["Emily", "Steve"]
