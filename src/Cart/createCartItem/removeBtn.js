export default function removeBtn() {
  const btn = document.createElement("button");
  btn.classList.add("cart-remove");
  btn.innerHTML = "Remove";
  return btn;
}
