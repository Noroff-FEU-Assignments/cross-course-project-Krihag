import fetchGames from "../Games/fetchGames.js";
import displayHTML from "../Games/createHTML/displayHTML.js";
import structure from "../Games/dataStructure/strGameSmall.js";
import errorHandling from "../Games/errorHandling/errorHandling.js";

const [bestSellersCon, FeaturedGamesCon] =
  document.querySelectorAll(".games-container");

const games = await fetchGames();

if (games.errors) {
  errorHandling(games, bestSellersCon);
  errorHandling(games, FeaturedGamesCon);
} else {
  for (let i = 0; i < 6; i++) {
    displayHTML(games[i], structure, bestSellersCon);
  }

  const reversedGames = games.reverse();

  for (let i = 0; i < 6; i++) {
    displayHTML(reversedGames[i], structure, FeaturedGamesCon);
  }
}
