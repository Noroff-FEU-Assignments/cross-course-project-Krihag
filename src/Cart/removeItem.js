export default function removeItem(item, cartItems) {
  item.children[1].addEventListener("click", function (e) {
    item.remove();
    const getItems = localStorage.getItem("cartItems");
    const parsedItem = JSON.parse(getItems);

    let removedItem = false;
    const updatedList = parsedItem.filter((pItem) => {
      if (pItem === item.id) {
        if (removedItem) {
          return pItem;
        } else removedItem = true;
      } else return pItem;
    });
    localStorage.setItem("cartItems", JSON.stringify(updatedList));
    location.reload();
  });
}
