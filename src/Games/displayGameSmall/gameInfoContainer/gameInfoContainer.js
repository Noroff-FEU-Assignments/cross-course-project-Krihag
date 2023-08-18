import gamePrice from "./gamePrice/gamePrice.js";
import nameAndGenre from "./nameAndGenre/nameAndGenre.js";

export default function gameInfoContainer(game) {
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("game-info-container");
  infoContainer.append(nameAndGenre(game, "name-and-genre"));
  infoContainer.append(gamePrice(game));

  return infoContainer;
}
