import specialProps from "./specialProps/specialProps.js";

export default function createHTML(data, structure) {
  if (structure.onSale && !data.onSale) return "";
  const element = document.createElement(structure.type);
  specialProps(element, data, structure);

  if (structure.children) {
    structure.children.forEach((child) => {
      element.append(createHTML(data, child));
    });
  }

  return element;
}
