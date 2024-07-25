function secret(text) {
  const [tag, ...rest] = text.split(".");
  return `<${tag} class="${rest.join(" ")}"></${tag}>`;
}
console.log(secret("p.one.two.three"));
// ➞ `<p class="one two three"></p>`

console.log(secret("p.one"));
//  ➞ `<p class="one"></p>`

console.log(secret("p.four.five"));
// ➞ `<p class="four five"></p>`
