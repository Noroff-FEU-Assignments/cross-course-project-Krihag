import displayHTML from "./createHTML/displayHTML.js";
import strSlider from "./dataStructure/strSlider.js";

export default function slider(games, container) {
  const slidersContainer = document.createElement("div");
  slidersContainer.classList.add("featured-games-slider");
  displayHTML(games[4], strSlider, slidersContainer);
  displayHTML(games[7], strSlider, slidersContainer);
  displayHTML(games[8], strSlider, slidersContainer);
  displayHTML(games[4], strSlider, slidersContainer);
  container.append(slidersContainer);
}
