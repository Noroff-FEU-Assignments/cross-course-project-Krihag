export default function gameImage(game) {
  const gameImg = document.createElement("img");
  gameImg.src = game.image;
  gameImg.alt = game.description;
  return gameImg;
}
