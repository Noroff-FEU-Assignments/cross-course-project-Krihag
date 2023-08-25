export default function backgroundImg(element, data) {
  element.style.background = `url(${data.image}), no-repeat`;
  element.style.backgroundSize = "contain";
  element.style.backgroundRepeat = "no-repeat";
  element.style.backgroundPosition = "center, center";
}
