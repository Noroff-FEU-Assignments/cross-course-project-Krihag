import gameGenre from "./gameGenre.js";
import gameName from "./gameName.js";

export default function nameAndGenre(game) {
  const container = document.createElement("div");
  container.classList.add("name-and-genre");
  container.append(gameName(game));
  container.append(gameGenre(game));
  return container;
}
