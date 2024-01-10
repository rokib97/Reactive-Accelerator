// select dom element
const price = document.getElementById("initial-price");
const total = document.getElementById("total-price");
const button = document.getElementById("button");

// data or stata
const productPrice = 5000;
let totalPrice = 0;

price.innerText = `৳ ${productPrice}`;
total.innerText = `Total: ৳ 0`;

button.addEventListener("click", () => {
  totalPrice += productPrice;

  //   update the UI
  total.innerText = `৳ ${totalPrice}`;
});
