export default {
  type: "section",
  className: ["article-header"],
  children: [
    { type: "img", className: ["game-description-main-img"] },
    { type: "h1", text: "title", className: ["game-title"] },
    { type: "p", text: "genre" },
    {
      type: "div",
      className: ["price-info-and-buy-container"],
      children: [
        {
          type: "div",
          onSale: true,
          className: ["game-on-sale"],
          displayDiscount: true,
        },
        {
          type: "div",
          className: ["buy-cta-and-available-on"],
          children: [
            {
              type: "div",
              className: ["article-header-price", "on-sale-container"],
              children: [
                {
                  type: "p",
                  onSale: true,
                  text: "price",
                  className: ["non-discount-price"],
                },
                { type: "p", text: "priceS", className: ["on-sale"] },
              ],
            },
            {
              type: "div",
              className: ["available-on-container"],
              children: [
                { type: "p", hardText: "Available on:" },
                {
                  type: "div",
                  className: ["avialable-on-icons"],
                  children: [
                    { type: "i", className: ["fa-brands", "fa-playstation"] },
                    { type: "i", className: ["fa-brands", "fa-xbox"] },
                    { type: "i", className: ["fa-solid", "fa-laptop"] },
                  ],
                },
              ],
            },
          ],
        },
        { type: "button", className: ["buy-now-btn"], hardText: "Add to Cart" },
      ],
    },
  ],
};
