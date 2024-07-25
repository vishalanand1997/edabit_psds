function convertToNumber(obj) {
  const newObj = {};
  for (let key in obj) {
    newObj[key] = +obj[key];
  }
  return newObj;
}
console.log(convertToNumber({ piano: "200" })); //➞ { piano: 200 }

console.log(convertToNumber({ piano: "200", tv: "300" })); //➞ { piano: 200, tv: 300 }

console.log(convertToNumber({ piano: "200", tv: "300", stereo: "400" })); //➞ { piano: 200, tv: 300, stereo: 400 }
