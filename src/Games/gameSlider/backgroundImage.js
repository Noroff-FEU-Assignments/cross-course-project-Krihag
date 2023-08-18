export default function backgroundImage(game, slide) {
  slide.style.background = `url(${game.image}), no-repeat`;
  slide.style.backgroundSize = "contain";
  slide.style.backgroundRepeat = "no-repeat";
  slide.style.backgroundPosition = "center, center";
}
