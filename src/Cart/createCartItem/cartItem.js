import container from "./container.js";
import gameContainer from "./gameContainer.js";
import gameImage from "../../Games/displayGameSmall/gameImage.js";
import nameAndGenre from "../../Games/displayGameSmall/gameInfoContainer/nameAndGenre/nameAndGenre.js";
import itemPrice from "./itemPrice.js";
import removeBtn from "./removeBtn.js";
import gameInfo from "./gameInfo.js";

export default function CartItem(game) {
  (this.mainContainer = container(game)),
    (this.gameContainer = gameContainer()),
    (this.image = gameImage(game)),
    (this.gameInfo = gameInfo()),
    (this.nameAndGenre = nameAndGenre(game, "cart-game-name")),
    (this.price = itemPrice(game)),
    (this.remove = removeBtn());
}
