const tax = 0.06;

function checkout(cart) {
  let priceSum = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].taxable) {
      priceSum += cart[i].qty * cart[i].prc * tax;
    }
    priceSum += cart[i].qty * cart[i].prc;
  }
  return priceSum;
}
console.log(
  checkout([
    { desc: "potato chips", prc: 2, qty: 2, taxable: false },
    { desc: "soda", prc: 3, qty: 2, taxable: false },
    { desc: "paper plates", prc: 5, qty: 1, taxable: true },
  ])
);
//    ➞ 15.3
