export default function getTotalPrice(items) {
  const allPrices = items
    .map((item) => item[0].discountedPrice)
    .reduce((acc, cur) => acc + cur);

  return `$${allPrices.toFixed(2)}`;
}
