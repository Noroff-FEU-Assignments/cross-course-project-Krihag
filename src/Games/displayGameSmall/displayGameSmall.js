import createGame from "./createGame.js";

export default function displayGameSmall(game, container) {
  const createdGame = createGame(game);
  container.append(createdGame);
}
