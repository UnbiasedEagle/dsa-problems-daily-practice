/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let result = nums[0];
  const dp = [[result, result]];

  for (let i = 1; i < nums.length; i++) {
    const prevMini = dp[i - 1][0];
    const prevMaxi = dp[i - 1][1];

    let currentMini;
    let currentMaxi;

    if (nums[i] < 0) {
      currentMaxi = Math.max(nums[i], prevMini * nums[i]);
      currentMini = Math.min(nums[i], nums[i] * prevMaxi);
    } else {
      currentMaxi = Math.max(nums[i], nums[i] * prevMaxi);
      currentMini = Math.min(nums[i], prevMini * nums[i]);
    }

    result = Math.max(result, currentMaxi);
    dp[i] = [];
    dp[i][0] = currentMini;
    dp[i][1] = currentMaxi;
  }

  return result;
};
