import gameCover from "./gameCover.js";
import gameImage from "./gameImage.js";
import gameInfoContainer from "./gameInfoContainer/gameInfoContainer.js";

export default function createGame(game) {
  const cover = gameCover(game);
  cover.append(gameImage(game));
  cover.append(gameInfoContainer(game));

  return cover;
}
