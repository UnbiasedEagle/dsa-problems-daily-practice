/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let swapIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      [nums[i], nums[swapIdx]] = [nums[swapIdx], nums[i]];
      swapIdx++;
    }
  }

  return swapIdx;
};
