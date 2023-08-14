export default function salePrice(game) {
  const container = document.createElement("div");
  container.classList.add("on-sale-container");

  const originalPrice = document.createElement("p");
  originalPrice.innerText = "$ " + game.price;
  originalPrice.classList.add("non-discount-price");
  container.append(originalPrice);

  const discountPrice = document.createElement("p");
  discountPrice.classList.add("on-sale");
  discountPrice.innerText = "$ " + game.discountedPrice;
  container.append(discountPrice);

  return container;
}
