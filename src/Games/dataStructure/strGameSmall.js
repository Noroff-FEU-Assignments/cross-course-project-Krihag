export default {
  type: "a",
  href: true,
  className: ["game-cover-container"],
  children: [
    { type: "img", src: true },
    {
      type: "div",
      className: ["game-info-container"],
      children: [
        {
          type: "div",
          className: ["name-and-genre"],
          children: [
            { type: "div", className: ["game-main-title"], text: "title" },
            { type: "p", text: "genre" },
          ],
        },
        {
          type: "div",
          className: ["on-sale-container"],
          children: [
            {
              type: "p",
              text: "price",
              onSale: true,
              className: ["non-discount-price"],
            },
            { type: "p", text: "priceS", className: ["game-price"] },
          ],
        },
      ],
    },
  ],
};
