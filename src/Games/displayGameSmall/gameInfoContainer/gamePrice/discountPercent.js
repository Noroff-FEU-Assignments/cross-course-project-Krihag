export default function discountPercent(game) {
  const discountPercent = document.createElement("div");
  const percentage = 1 - game.discountedPrice / game.price;
  const discount = (percentage * 100).toFixed(0);
  discountPercent.classList.add("game-on-sale");
  discountPercent.innerText = `SALE: ${discount}% Discount!`;
  return discountPercent;
}
