export default function gameCover(game) {
  const cover = document.createElement("a");
  cover.classList.add("game-cover-container");
  cover.href = `game-description.html?id=${game.id}`;

  return cover;
}
