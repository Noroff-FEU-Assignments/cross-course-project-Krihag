export default function gameImage(game, className) {
  const gameImg = document.createElement("img");
  gameImg.src = game.image;
  gameImg.alt = game.description;
  if (className) gameImg.classList.add(className);
  return gameImg;
}
