export default function getTitle(game) {
  const title = document.createElement("h1");
  title.classList.add("game-title");
  title.textContent = game.title;

  return title;
}
