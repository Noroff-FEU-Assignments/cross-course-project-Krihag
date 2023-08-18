import removeItem from "../Cart/removeItem.js";
import fetchGames from "../Games/fetchGames.js";
import CartItem from "../Cart/createCartItem/cartItem.js";
import createHTML from "../Cart/createCartItem/createHTML.js";
import getTotalPrice from "../Cart/getTotalPrice.js";

const cartItemsContainer = document.querySelector(".shopping-cart-container");
const totalPriceContainer = document.querySelector(".estimated-total");
const paymentBtn = document.querySelector(".payment-btn");

const url = "https://api.noroff.dev/api/v1/gamehub";
const games = await fetchGames(url);

const storedItems = localStorage.getItem("cartItems");
const parsedItems = JSON.parse(storedItems);

if (parsedItems.length > 0) {
  let cartItems = parsedItems.map((item) =>
    games.filter((game) => game.id == item)
  );

  cartItems.forEach((item, i) => (item[0].key = i));

  cartItems.forEach((item, i) => {
    const cartItem = new CartItem(item[0]);

    createHTML(cartItem);

    const cartItemHTML = cartItem.mainContainer;

    cartItemsContainer.append(cartItemHTML);
  });

  totalPriceContainer.innerText = getTotalPrice(cartItems);

  const removeItemBtn = document.querySelectorAll(".cart-games-and-remove");

  removeItemBtn.forEach((item) => {
    removeItem(item, cartItems);
  });
  paymentBtn.classList.remove("hidden");
} else {
  // This happens if cart is Empty
  const container = document.createElement("div");
  container.innerText = "Cart is currently empty..";
  container.classList.add("empty-cart");
  cartItemsContainer.append(container);
}
