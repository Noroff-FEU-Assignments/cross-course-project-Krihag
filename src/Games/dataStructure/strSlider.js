export default {
  type: "article",
  className: ["game-slide-container"],

  children: [
    {
      type: "div",
      className: ["game-slide"],
      backgroundImg: true,
      children: [
        {
          type: "div",
          className: ["slider-price-and-read-more"],
          children: [
            { type: "p", className: ["slide-game-price"], text: "priceS" },
            {
              type: "a",
              href: true,
              className: ["game-read-more"],
              hardText: "Read More",
            },
          ],
        },
      ],
    },
  ],
};
