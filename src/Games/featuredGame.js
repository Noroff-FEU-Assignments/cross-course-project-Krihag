const hiddenArticle = document.querySelector(".main-article-hide");
const nameContainer = document.querySelector(".main-game-name");
const genreContainer = document.querySelector(".main-game-genre");
const priceContainer = document.querySelector(".main-game-price");
const gameDescription = document.querySelector(".main-game-description");
const readMoreBtn = document.querySelector(".main-game-read-more");

export default function featuredGame(game) {
  nameContainer.textContent = game.title;
  genreContainer.textContent = game.genre;
  priceContainer.textContent = `$${game.discountedPrice}`;
  gameDescription.textContent = `"${game.description}"`;
  readMoreBtn.href = `game-description.html?id=${game.id}`;
  hiddenArticle.classList.remove("main-article-hide");
}
