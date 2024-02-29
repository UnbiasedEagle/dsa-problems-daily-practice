/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);

  let low = 0;
  let high = k - 1;

  let result = Infinity;

  while (high < nums.length) {
    const current = nums[high] - nums[low];
    result = Math.min(current, result);

    high++;
    low++;
  }

  return result;
};
