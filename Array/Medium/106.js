function tidyBooks(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const strVal = arr[i].trim().replaceAll(" -", ",");
    result.push(strVal);
  }
  return result;
}
console.log(
  tidyBooks([
    "     The Catcher in the Rye - J. D. Salinger    ",
    "    Brave New World - Aldous Huxley   ",
    "    Of Mice and Men - John Steinbeck    ",
  ])
);
console.log(
  tidyBooks([
    "   Death of a Salesman - Arthur Miller    ",
    "   Macbeth - William Shakespeare    ",
    "    A Separate Peace - John Knowles     ",
    " Lord of the Flies - William Golding",
    "A Tale of Two Cities - Charles Dickens",
  ])
);
/**
 * [
  ["Death of a Salesman", "Arthur Miller"],
  ["Macbeth", "William Shakespeare"],
  ["A Separate Peace", "John Knowles"],
  ["Lord of the Flies", "William Golding"],
  ["A Tale of Two Cities", "Charles Dickens"]
]
 */
//    ➞ [
//     "The Catcher in the Rye", "J. D. Salinger",
//     "Brave New World", "Aldous Huley",
//     "Of Mice and Men", "John Steinbeck"
//   ]
