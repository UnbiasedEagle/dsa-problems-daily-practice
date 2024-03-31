/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let isModified = false;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      if (isModified) return false;

      if (i - 1 === 0 || (i - 2 >= 0 && nums[i] >= nums[i - 2])) {
        nums[i - 1] = nums[i];
        isModified = true;
      } else {
        nums[i] = nums[i - 1];
        isModified = true;
      }
    }
  }

  return true;
};
