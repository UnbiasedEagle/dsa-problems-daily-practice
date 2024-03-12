/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let cost1 = cost[0];
  let cost2 = cost[1];

  for (let i = 2; i < cost.length; i++) {
    const currentMinCost = Math.min(cost1, cost2) + cost[i];
    cost1 = cost2;
    cost2 = currentMinCost;
  }

  return Math.min(cost1, cost2);
};
