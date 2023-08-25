import fetchGames from "../Games/fetchGames.js";
import displayGame from "../Games/createHTML/displayHTML.js";
import structureSmall from "../Games/dataStructure/strGameSmall.js";
import structureSlider from "../Games/dataStructure/strSlider.js";
import errorHandling from "../Games/errorHandling/errorHandling.js";

const gamesContainer = document.querySelector(".games-container");
const gameCategory = document.querySelector("#game-category");
const slideUpperContain = document.querySelector(".featured-games-container");
const gameSlider = document.querySelector(".featured-games-slider");

const games = await fetchGames();

if (games.errors) {
  errorHandling(games, slideUpperContain);
  errorHandling(games, gamesContainer);
} else {
  // Display slider games
  displayGame(games[4], structureSlider, gameSlider);
  displayGame(games[7], structureSlider, gameSlider);
  displayGame(games[8], structureSlider, gameSlider);
  displayGame(games[4], structureSlider, gameSlider);

  // Display all games
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
