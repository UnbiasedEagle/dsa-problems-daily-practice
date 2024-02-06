/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;

  let startDay = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[startDay]) {
      const profit = prices[i] - prices[startDay];
      result = Math.max(result, profit);
    } else {
      startDay = i;
    }
  }

  return result;
};
