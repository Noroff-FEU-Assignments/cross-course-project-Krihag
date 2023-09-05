import fetchGames from "../Games/fetchGames.js";
import displayHTML from "../Games/createHTML/displayHTML.js";
import getTotalPrice from "../Cart/getTotalPrice.js";
import strCheckoutItem from "../Games/dataStructure/strCheckoutItem.js";

const games = await fetchGames();

const itemsContainer = document.querySelector(".all-cart-items");
const totalPriceContainer = document.querySelector(".cart-total-price");
const buyNowBtn = document.querySelector(".cta-checkout-buy");

const storedItems = localStorage.getItem("cartItems");
const parsedItems = JSON.parse(storedItems);

let cartItems = parsedItems.map((item) =>
  games.filter((game) => game.id == item)
);

cartItems.forEach((item) =>
  displayHTML(item[0], strCheckoutItem, itemsContainer)
);

totalPriceContainer.textContent = "Total: " + getTotalPrice(cartItems);

// Removes all items from storage so that cart will be empty
buyNowBtn.addEventListener("click", function () {
  localStorage.removeItem("cartItems");
});
