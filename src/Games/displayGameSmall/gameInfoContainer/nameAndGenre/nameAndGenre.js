import gameGenre from "./gameGenre.js";
import gameName from "./gameName.js";

export default function nameAndGenre(game, className) {
  const container = document.createElement("div");
  container.classList.add(className);
  container.append(gameName(game));
  container.append(gameGenre(game));
  return container;
}
