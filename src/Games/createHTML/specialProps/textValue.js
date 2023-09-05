export default function textValue(element, data, structure) {
  if (structure.text === "priceS") {
    element.textContent = `$${data.discountedPrice}`;
  } else if (structure.text === "price") element.textContent = `$${data.price}`;
  else element.textContent = data[structure.text];
}
