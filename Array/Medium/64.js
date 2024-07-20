function backToHome(directions) {
  const newObj = {};
  for (let i = 0; i < directions.length; i++) {
    if (newObj.hasOwnProperty(directions[i])) {
      newObj[directions[i]] += 1;
    } else {
      newObj[directions[i]] = 1;
    }
  }
  return Object.values(newObj).every(
    (item) => item === Object.values(newObj)[0]
  );
}
console.log(backToHome("EEWE")); // ➞ false

console.log(backToHome("NENESSWW")); // ➞ true

console.log(backToHome("NEESSW")); //➞ false
