/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dpArray = Array.from({ length: nums.length }).fill(-1);

  function execute(idx = nums.length - 1) {
    if (idx < 0) {
      return 0;
    }

    if (dpArray[idx] !== -1) {
      return dpArray[idx];
    }

    const amt1 = execute(idx - 1);
    const amt2 = execute(idx - 2) + nums[idx];
    const total = Math.max(amt1, amt2);
    dpArray[idx] = total;
    return total;
  }

  return execute();
};
