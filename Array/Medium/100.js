/**
 * 
Difficulty	Experience Points
Very Easy	5XP
Easy	10XP
Medium	20XP
Hard	40XP
Very Hard	80XP
 */
function getXP(obj) {
  let sumXP = 0;
  const values = {
    "Very Easy": 5,
    Easy: 10,
    Medium: 20,
    Hard: 40,
    "Very Hard": 80,
  };
  for (let key in obj) {
    sumXP += values[key] * obj[key];
  }
  return sumXP + "XP";
}

console.log(
  getXP({
    "Very Easy": 89,
    Easy: 77,
    Medium: 30,
    Hard: 4,
    "Very Hard": 1,
  })
);
//    ➞ "2055XP"

console.log(
  getXP({
    "Very Easy": 254,
    Easy: 32,
    Medium: 65,
    Hard: 51,
    "Very Hard": 34,
  })
);
//   ➞ "7650XP"

console.log(
  getXP({
    "Very Easy": 11,
    Easy: 0,
    Medium: 2,
    Hard: 0,
    "Very Hard": 27,
  })
);
//    ➞ "2255XP"
