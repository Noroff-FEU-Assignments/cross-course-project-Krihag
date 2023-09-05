import errorHandling from "../Games/errorHandling/errorHandling.js";
import fetchGames from "../Games/fetchGames.js";
import strCartItem from "../Games/dataStructure/strCartItem.js";
import displayHTML from "../Games/createHTML/displayHTML.js";
import removeItem from "../Cart/removeItem.js";
import getTotalPrice from "../Cart/getTotalPrice.js";

const cartItemsContainer = document.querySelector(".shopping-cart-container");
const totalPriceContainer = document.querySelector(".estimated-total");
const priceContainer = document.querySelector(".cart-total-price");
const paymentBtn = document.querySelector(".payment-btn");
const loader = document.querySelector(".loader-container");

const games = await fetchGames();

loader.remove();
if (games.errors) {
  errorHandling(games, cartItemsContainer);
} else {
  const storedItems = localStorage.getItem("cartItems");
  const parsedItems = JSON.parse(storedItems);

  if (parsedItems.length > 0) {
    let cartItems = parsedItems.map((item) =>
      games.filter((game) => game.id == item)
    );

    cartItems.forEach((item) =>
      displayHTML(item[0], strCartItem, cartItemsContainer)
    );

    totalPriceContainer.textContent = getTotalPrice(cartItems);

    const removeBtn = document.querySelectorAll(".cart-games-and-remove");

    removeBtn.forEach((item) => removeItem(item));

    priceContainer.classList.remove("hidden");
    paymentBtn.classList.remove("hidden");
  }

  // IF cart is empty
  else {
    displayHTML(
      "",
      {
        type: "div",
        hardText: "Cart is empty...",
        className: ["empty-cart"],
      },
      cartItemsContainer
    );
  }
}
