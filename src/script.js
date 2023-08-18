const cartContainer = document.getElementById("cart");

const getItems = localStorage.getItem("cartItems");
const parsedItem = JSON.parse(getItems);

if (parsedItem.length > 0) {
  cartContainer.classList.add("add-item-to-cart");
  cartContainer.title = parsedItem.length;
}
