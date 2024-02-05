/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const alreadyPresent = new Set(nums);

  const result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!alreadyPresent.has(i)) {
      result.push(i);
    }
  }

  return result;
};
