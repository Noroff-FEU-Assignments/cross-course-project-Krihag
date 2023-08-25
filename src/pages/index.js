import fetchGames from "../Games/fetchGames.js";
import displayGameSmall from "../Games/displayGameSmall/displayGameSmall.js";
import errorHandling from "../Games/errorHandling.js";

const url = "https://api.noroff.dev/api/v1/gamehub";
const [bestSellers, TrendingGames] =
  document.querySelectorAll(".games-container");

const games = await fetchGames(url);

if (games.errors) {
  errorHandling(games, bestSellers);
  errorHandling(games, TrendingGames);
} else {
  for (let i = 0; i < 6; i++) {
    displayGameSmall(games[i], bestSellers);
  }

  for (let i = 9; i > 3; i--) {
    displayGameSmall(games[i], TrendingGames);
  }
}
