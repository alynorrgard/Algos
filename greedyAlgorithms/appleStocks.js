// APPROACH
// - initialize highestProfit starting at 0
// - loop over stockPrices
//      - initialize pointer for buyPrice
//      - nested loop over stockPrices
//          - initialize pointer for sellPrice
//          - if profit (sellPrice - buyPrice) > highestProfit, reassign highestProfit
// - return highestProfit
