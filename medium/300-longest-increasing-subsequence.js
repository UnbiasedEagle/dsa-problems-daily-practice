/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = Array.from({ length: nums.length }).fill(1);

  let result = 1;

  for (let i = 1; i < nums.length; i++) {
    let maxLength = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        maxLength = Math.max(maxLength, dp[j] + 1);
      }
    }

    result = Math.max(result, maxLength);
    dp[i] = maxLength;
  }

  return result;
};
