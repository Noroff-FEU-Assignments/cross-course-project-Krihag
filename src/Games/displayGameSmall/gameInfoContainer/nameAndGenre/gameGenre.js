export default function gameGenre(game) {
  const genre = document.createElement("p");
  genre.innerText = game.genre;
  return genre;
}
