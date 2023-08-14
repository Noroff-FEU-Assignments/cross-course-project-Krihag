export default function normalPrice(game) {
  const gamePrice = document.createElement("p");
  gamePrice.classList.add("game-price");
  gamePrice.innerText = "$ " + game.price;

  return gamePrice;
}
