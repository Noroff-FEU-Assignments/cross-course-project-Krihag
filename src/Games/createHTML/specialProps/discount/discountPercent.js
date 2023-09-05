export default function discountPercent(element, game) {
  const discountPercent = document.createElement("div");
  const percentage = 1 - game.discountedPrice / game.price;
  const discount = (percentage * 100).toFixed(0);
  element.classList.add("game-on-sale");
  element.innerText = `SALE: ${discount}% Discount!`;
}
