export default function createHTML(item) {
  item.image.classList.add("cart-item-images");
  item.mainContainer.append(item.gameContainer);
  item.mainContainer.append(item.remove);
  item.gameContainer.append(item.image);
  item.gameContainer.append(item.gameInfo);
  item.gameInfo.append(item.nameAndGenre);
  item.gameInfo.append(item.price);
}
