import fetchGames from "../Games/fetchGames.js";
import displayHTML from "../Games/createHTML/displayHTML.js";
import structure from "../Games/dataStructure/strGameSmall.js";
import errorHandling from "../Games/errorHandling/errorHandling.js";
import featuredGame from "../Games/featuredGame.js";

const [bestSellersCon, FeaturedGamesCon] =
  document.querySelectorAll(".games-container");
const loaders = document.querySelectorAll(".loader-container");

const games = await fetchGames();

loaders.forEach((loader) => loader.remove());
if (games.errors) {
  errorHandling(games, bestSellersCon);
  errorHandling(games, FeaturedGamesCon);
} else {
  featuredGame(games[3]);
  for (let i = 0; i < 6; i++) {
    displayHTML(games[i], structure, bestSellersCon);
  }

  const reversedGames = games.reverse();

  for (let i = 0; i < 6; i++) {
    displayHTML(reversedGames[i], structure, FeaturedGamesCon);
  }
}
