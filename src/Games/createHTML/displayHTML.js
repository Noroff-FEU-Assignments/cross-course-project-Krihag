import createHTML from "./createHTML.js";

export default function displayHTML(data, structure, container) {
  const gameContainer = createHTML(data, structure);
  container.append(gameContainer);
}
