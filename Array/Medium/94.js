function superheroes(heroes) {
  const result = [];
  for (let i = 0; i < heroes.length; i++) {
    if (
      !heroes[i].toLowerCase().includes("woman") &&
      heroes[i].slice(heroes[i].length - 3) === "man"
    ) {
      result.push(heroes[i]);
    }
  }
  return result;
}
console.log(
  superheroes([
    "Batman",
    "Superman",
    "Spider-man",
    "Hulk",
    "Wolverine",
    "Wonder-Woman",
  ])
);
// ➞ ["Batman", "Spider-man", "Superman"]

console.log(
  superheroes([
    "Catwoman",
    "Deadpool",
    "Dr.Strange",
    "Captain-America",
    "Aquaman",
    "Hawkeye",
  ])
);
// ➞ ["Aquaman"]

console.log(superheroes(["Wonder-Woman", "Catwoman", "Invisible-Woman"]));
// ➞ []
