import fetchGames from "../Games/fetchGames.js";
import displayGameSmall from "../Games/displayGameSmall/displayGameSmall.js";

const url = "https://api.noroff.dev/api/v1/gamehub";
const [bestSellers, TrendingGames] =
  document.querySelectorAll(".games-container");

const games = await fetchGames(url);

for (let i = 0; i < 6; i++) {
  displayGameSmall(games[i], bestSellers);
}

for (let i = 9; i > 3; i--) {
  displayGameSmall(games[i], TrendingGames);
}
