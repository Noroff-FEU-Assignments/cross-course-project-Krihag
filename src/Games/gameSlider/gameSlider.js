import backgroundImage from "./backgroundImage.js";

const slides = document.querySelectorAll(".game-slide");
const readMore = document.querySelectorAll(".game-read-more");
const priceContainer = document.querySelectorAll(".slide-game-price");

console.log(readMore);
export default function gameSlider(games) {
  slides.forEach((slide, i) => {
    // j is for sellecting games 4,5 and 6.
    let j = i + 4;
    if (j === 7) j = 4;
    let curGame = games[j];

    backgroundImage(curGame, slide);
    readMore[i].href = `game-description.html?id=${curGame.id}`;
    console.log(priceContainer[i]);

    priceContainer[i].innerText = `$${curGame.discountedPrice}`;
  });
}
