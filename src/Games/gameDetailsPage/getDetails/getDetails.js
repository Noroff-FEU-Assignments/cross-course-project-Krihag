import gameImage from "../../displayGameSmall/gameImage.js";
import mainContainer from "./mainContainer.js";
import getTitle from "./getTitle.js";
import getGenre from "./getGenre.js";

export default function getDetails(game) {
  const container = mainContainer();
  container.append(gameImage(game, "game-description-main-img"));
  container.append(getTitle(game));
  container.append(getGenre(game));
  console.log(container);
}

/* <section class="article-header">
<img class="game-description-main-img" src="../images/game-description-main-big.png"></img>
<h1 class="game-title">Game Title</h1>
<p class="game-genre">Subtitle</p>

<!-- Price, availability icons and buy now cta -->
<div class="price-info-and-buy-container">
  <div class="buy-cta-and-available-on">
    <div class="article-header-price">
      <p class="game-price">$49.99</p>
    </div>
    <div class="available-on-container">
      <p>Available on:</p>
      <div class="available-on-icons">
        <i class="fa-brands fa-playstation"></i>
        <i class="fa-brands fa-xbox"></i>
        <i class="fa-solid fa-laptop"></i>
      </div>
    </div>
  </div>
  <button class="buy-now-btn">Add to Cart</button>
</div>
</section> */
