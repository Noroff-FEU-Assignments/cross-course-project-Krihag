const cartContainer = document.getElementById("cart");

export default function addCartItem(game) {
  let getPrevGames = localStorage.getItem("cartItems");
  let gamesPrevAdded = JSON.parse(getPrevGames);
  if (gamesPrevAdded === null) gamesPrevAdded = "";

  const itemsInCart = [...gamesPrevAdded, game.id];

  localStorage.setItem("cartItems", JSON.stringify(itemsInCart));

  cartContainer.classList.add("add-item-to-cart");
  cartContainer.title = itemsInCart.length;
}
