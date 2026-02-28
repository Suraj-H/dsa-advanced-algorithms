prices = [7, 1, 5, 3, 6, 4];

// Time: O(n)
// Space: O(1)
function bestTimeToBuyAndSellStock(prices) {
  if (prices.length === 0) {
    return 0;
  }

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
}

console.log("bestTimeToBuyAndSellStock ->", bestTimeToBuyAndSellStock(prices));
