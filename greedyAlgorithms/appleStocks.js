// APPROACH
// - initialize highestProfit starting at 0
// - loop over stockPrices
//      - initialize pointer for buyPrice
//      - nested loop over stockPrices
//          - initialize pointer for sellPrice
//          - if profit (sellPrice - buyPrice) > highestProfit, reassign highestProfit
// - return highestProfit

function getMaxProfit(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error();
  }

  let minPrice = stockPrices[0];
  let highestProfit = stockPrices[1] - stockPrices[0];

  for (let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];
    const profit = currentPrice - minPrice;

    highestProfit = Math.max(highestProfit, profit);
    minPrice = Math.min(minPrice, currentPrice);
  }
  return highestProfit;
}
