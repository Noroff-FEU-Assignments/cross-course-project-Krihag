export default function container(game) {
  const gameAndRemoveContainer = document.createElement("div");
  gameAndRemoveContainer.classList.add("cart-games-and-remove");
  gameAndRemoveContainer.id = game.id;
  return gameAndRemoveContainer;
}
