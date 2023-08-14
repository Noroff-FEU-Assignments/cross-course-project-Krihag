export default function gameName(game) {
  const gameName = document.createElement("p");
  gameName.classList.add("game-main-title");
  gameName.innerText = game.title;
  return gameName;
}
