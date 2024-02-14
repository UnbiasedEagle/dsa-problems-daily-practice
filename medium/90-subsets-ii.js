/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const set = new Set();
  const result = [];

  function addSubsets(idx = 0, subset = []) {
    if (idx === nums.length) {
      const key = subset.join();
      if (!set.has(key)) {
        result.push([...subset]);
        set.add(key);
      }
      return;
    }

    addSubsets(idx + 1, subset);
    subset.push(nums[idx]);
    addSubsets(idx + 1, subset);
    subset.pop();
  }

  addSubsets();

  return result;
};
