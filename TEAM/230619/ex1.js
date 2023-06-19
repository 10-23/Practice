const addCartBtns = document.querySelectorAll(".add-cart");
const myCart = document.querySelector(".my-cart");

addCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.previousElementSibling.previousElementSibling.textContent;
    const price = btn.previousElementSibling.textContent;
    addToCart(item, price);
  });
});

const addToCart = (item, price) => {
  const cartItem = document.createElement("li");
  cartItem.textContent = `${item} - ${price}`;
  myCart.appendChild(cartItem);
};
