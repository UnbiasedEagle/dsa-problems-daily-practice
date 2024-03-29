/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxAverage = sum / k;

  for (let i = k; i < nums.length; i++) {
    sum -= nums[i - k];
    sum += nums[i];
    const currentAverage = sum / k;

    maxAverage = Math.max(currentAverage, maxAverage);
  }

  return maxAverage;
};
