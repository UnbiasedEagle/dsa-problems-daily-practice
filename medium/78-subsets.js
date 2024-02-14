/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];

  function helper(idx = 0, subset = []) {
    if (idx === nums.length) {
      result.push([...subset]);
      return;
    }

    helper(idx + 1, subset);
    subset.push(nums[idx]);
    helper(idx + 1, subset);
    subset.pop();
  }

  helper();

  return result;
};
