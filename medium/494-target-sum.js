/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const cache = new Map();

  function execute(currentSum = 0, idx = 0) {
    const key = `${idx}-${currentSum}`;
    if (cache.has(key)) return cache.get(key);

    if (idx === nums.length) {
      if (currentSum === target) {
        return 1;
      }
      return 0;
    }

    const positive = execute(currentSum + nums[idx], idx + 1);
    const negative = execute(currentSum - nums[idx], idx + 1);

    cache.set(key, positive + negative);
    return positive + negative;
  }

  return execute();
};

console.log(findTargetSumWays([1, 1, 1], 3));
