import fetchGames from "../Games/fetchGames.js";
import displayHTML from "../Games/createHTML/displayHTML.js";
import structureGameDescript from "../Games/dataStructure/strGameDescript.js";
import errorHandling from "../Games/errorHandling/errorHandling.js";
import addCartItem from "../Cart/addCartItem.js";

const headerContainer = document.querySelector("#container-header");
const loader = document.querySelector(".loader-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const game = await fetchGames(id);

loader.remove();
if (game.errors) errorHandling(game, headerContainer);
else {
  displayHTML(game, structureGameDescript, headerContainer);

  const buyNowBtn = document.querySelector(".buy-now-btn");
  // CART
  buyNowBtn.addEventListener("click", function () {
    addCartItem(game);
  });
}
