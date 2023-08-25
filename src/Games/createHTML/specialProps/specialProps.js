import backgroundImg from "./backgroundImg.js";
import textValue from "./textValue.js";
import typeImg from "./typeImg.js";
import displayDiscount from "./discount/displayDiscount.js";

export default function specialProps(element, data, structure) {
  if (structure.type === "img") typeImg(element, data);
  if (structure.href) element.href = `game-description.html?id=${data.id}`;
  if (structure.backgroundImg) backgroundImg(element, data);
  if (structure.text) textValue(element, data, structure);
  if (structure.hardText) element.textContent = structure.hardText;
  if (structure.className)
    structure.className.forEach((cName) => element.classList.add(cName));
  if (structure.displayDiscount) displayDiscount(element, data);
  if (structure.id) element.id = data.id;
}
