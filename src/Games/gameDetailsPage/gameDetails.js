import getDetails from "./getDetails/getDetails.js";
import renderDetails from "./renderDetails.js";

export default function gameDetails(game, container) {
  const details = getDetails(game);
  const rendered = renderDetails(details);
  return rendered;
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
