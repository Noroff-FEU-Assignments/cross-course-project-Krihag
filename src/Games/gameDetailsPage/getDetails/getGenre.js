export default function getGenre(game) {
  const genre = document.createElement("p");
  genre.classList.add("game-genre");
  genre.textContent = game.genre;
  return genre;
}
