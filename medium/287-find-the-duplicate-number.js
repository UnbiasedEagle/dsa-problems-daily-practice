/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const idx = Math.abs(nums[i]) - 1;

    if (nums[idx] < 0) return Math.abs(nums[i]);

    nums[idx] = -1 * Math.abs(nums[idx]);
  }
};
