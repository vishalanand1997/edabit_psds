/**
 * A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
Create a function that takes in an array of names and returns the name of the secret society.
 */

function societyName(friends) {
  let result = "";
  const sortedFriends = friends.sort((a, b) => a.localeCompare(b));
  for (let i = 0; i < sortedFriends.length; i++) {
    result += sortedFriends[i].charAt(0);
  }
  return result;
}

console.log(societyName(["Adam", "Sarah", "Malcolm"])); //➞ "AMS"

console.log(societyName(["Harry", "Newt", "Luna", "Cho"])); //➞ "CHLN"

console.log(
  societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])
); //➞ "CJMPRR"
