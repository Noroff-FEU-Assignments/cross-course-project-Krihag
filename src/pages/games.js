import fetchGames from "../Games/fetchGames.js";
import displayGameSmall from "../Games/displayGameSmall/displayGameSmall.js";

const url = "https://api.noroff.dev/api/v1/gamehub";
const gamesContainer = document.querySelector(".games-container");
const gameCategory = document.querySelector("#game-category");

const games = await fetchGames(url);

if (games.errors) {
  gamesContainer.innerHTML = `<div> ERROR: ${games.statusCode} ${games.status}</div>`;
  console.log(games);
} else {
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
