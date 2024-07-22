/**
 * 
Given an array of numbers arr:

Create an object for each given number.
The object key will be the number converted to a string.
The value will be the corresponding character code converted to a string (check ASCII table).
Return an array of the resulting objects.
 */
function numObj(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push({ [arr[i]]: String.fromCharCode(arr[i]) });
  }
  return result;
}
console.log(numObj([118, 117, 120])); //➞ [{'118':'v'}, {'117':'u'}, {'120':'x'}]

console.log(numObj([101, 121, 110, 113, 103])); //➞ [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'103':'g'}]

console.log(numObj([118, 103, 110])); //➞ [{"118":"v"}, {"103":"g"}, {"110":"n"}]
