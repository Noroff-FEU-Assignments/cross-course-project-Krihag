import fetchGames from "../Games/fetchGames.js";
import displayGame from "../Games/createHTML/displayHTML.js";
import structureSmall from "../Games/dataStructure/strGameSmall.js";
import errorHandling from "../Games/errorHandling/errorHandling.js";
import slider from "../Games/slider.js";

const gamesContainer = document.querySelector(".games-container");
const gameCategory = document.querySelector("#game-category");
const slideUpperContain = document.querySelector(".featured-games-container");
const loaders = document.querySelectorAll(".loader-container");

const games = await fetchGames();

loaders.forEach((loader) => loader.remove());
if (games.errors) {
  errorHandling(games, slideUpperContain);
  errorHandling(games, gamesContainer);
} else {
  slider(games, slideUpperContain);

  games.forEach((game) => displayGame(game, structureSmall, gamesContainer));

  // Change displayed games based on which category is clicked
  gameCategory.addEventListener("change", function (e) {
    const category = e.target.value;
    gamesContainer.innerHTML = "";
    games.forEach((game) => {
      if (category === "all-games")
        displayGame(game, structureSmall, gamesContainer);
      else if (game.genre.toLowerCase() === category)
        displayGame(game, structureSmall, gamesContainer);
    });
  });
}
