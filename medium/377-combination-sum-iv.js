/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  nums.sort((a, b) => a - b);

  const dp = Array.from({ length: target + 1 }).fill(0);

  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    let total = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i - nums[j] >= 0) {
        total += dp[i - nums[j]];
      } else {
        break;
      }
    }

    dp[i] = total;
  }

  return dp[target];
};
