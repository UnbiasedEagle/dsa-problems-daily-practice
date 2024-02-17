/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const current = nums[0];
  const maxi = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(current + nums[i], nums[i]);
    maxi = Math.max(maxi, current);
  }

  return maxi;
};
