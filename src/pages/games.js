import fetchGames from "../Games/fetchGames.js";
import displayGameSmall from "../Games/displayGameSmall/displayGameSmall.js";
import gameSlider from "../Games/gameSlider/gameSlider.js";
import errorHandling from "../Games/errorHandling.js";

const url = "https://api.noroff.dev/api/v1/gamehub";
const gamesContainer = document.querySelector(".games-container");
const gameCategory = document.querySelector("#game-category");
const sliderContainer = document.querySelector(".featured-games-container");

const games = await fetchGames(url);

if (games.errors) {
  errorHandling(games, gamesContainer);
  sliderContainer.innerHTML = "";
  errorHandling(games, sliderContainer);
} else {
  // GAME SLIDER
  gameSlider(games);

  const allGames = games.map((game) => displayGameSmall(game, gamesContainer));

  gameCategory.addEventListener("change", function (e) {
    const category = e.target.value;

    gamesContainer.innerHTML = "";
    games.forEach((game) => {
      if (category === "all-games") displayGameSmall(game, gamesContainer);
      else if (game.genre.toLowerCase() === category)
        displayGameSmall(game, gamesContainer);
    });
  });
}
