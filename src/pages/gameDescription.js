import fetchGames from "../Games/fetchGames.js";
import salePrice from "../Games/displayGameSmall/gameInfoContainer/gamePrice/salePrice.js";
import discountPercent from "../Games/displayGameSmall/gameInfoContainer/gamePrice/discountPercent.js";

const imageContainer = document.querySelector(".game-description-main-img");
const gameTitle = document.querySelector(".game-title");
const gameGenre = document.querySelector(".game-genre");
const priceContainer = document.querySelector(".price-info-and-buy-container");
const gamePrice = document.querySelector(".game-price");

const url = "https://api.noroff.dev/api/v1/gamehub";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const games = await fetchGames(url);
const game = games.find((game) => game.id === id);

imageContainer.src = game.image;
gameTitle.innerText = game.title;
gameGenre.innerText = game.genre;

if (game.onSale) {
  gamePrice.innerText = "";
  const discount = discountPercent(game);
  priceContainer.prepend(discount);
  gamePrice.append(salePrice(game));
} else gamePrice.innerText = "$" + game.price;
