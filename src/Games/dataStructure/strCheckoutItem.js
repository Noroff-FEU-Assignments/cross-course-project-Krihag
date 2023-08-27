export default {
  type: "div",
  className: ["cart-games"],
  children: [
    { type: "img", className: ["cart-item-images"] },
    {
      type: "div",
      className: ["cart-game-info"],
      children: [
        {
          type: "div",
          className: ["cart-game-name"],
          children: [
            { type: "p", text: "title", className: ["game-main-title"] },
            { type: "p", text: "genre" },
          ],
        },
        { type: "p", text: "priceS", className: ["game-price"] },
      ],
    },
    ,
  ],
};
