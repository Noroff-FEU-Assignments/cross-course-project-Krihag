import normalPrice from "./normalPrice.js";
import salePrice from "./salePrice.js";

export default function gamePrice(game) {
  const price = game.onSale ? salePrice(game) : normalPrice(game);
  return price;
}
