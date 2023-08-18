export default function itemPrice(game) {
  const price = document.createElement("p");
  price.classList.add("game-price");
  price.innerText = game.onSale ? `$${game.discountedPrice}` : `$${game.price}`;
  return price;
}
