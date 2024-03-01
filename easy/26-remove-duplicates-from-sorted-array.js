/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let swapIdx = 0;
  let count = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[swapIdx]) {
      swapIdx++;
      count++;
      [nums[i], nums[swapIdx]] = [nums[swapIdx], nums[i]];
    }
  }

  return count;
};
