/**
 * Best Time to Buy and Sell Stock
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 *
 * Constraints:
 * 1 <= prices.length <= 100
 * 0 <= prices[i] <= 100,000
 */

// best time to buy and sell stock: time: O(n)
function bestTimeToBuyAndSellStockDynamicProgramming(prices) {
  let maxProfit = 0;
  let minPrice = Infinity;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}

console.log("Best Time to Buy and Sell Stock Dynamic Programming: ", bestTimeToBuyAndSellStockDynamicProgramming([7, 1, 5, 3, 6, 4])); // 5

// best time to buy and sell stock: time: O(n)
function bestTimeToBuyAndSellStockSlidingWindow(prices) {
  let maxProfit = 0;
  let L = 0;
  let R = 1;

  while (R < prices.length) {
    maxProfit = Math.max(maxProfit, prices[R] - prices[L]);
    if (prices[L] > prices[R]) L = R;
    R++;
  }

  return maxProfit;
}

console.log("Best Time to Buy and Sell Stock Sliding Window: ", bestTimeToBuyAndSellStockSlidingWindow([7, 1, 5, 3, 6, 4])); // 5
