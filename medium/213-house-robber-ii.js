/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  function calculate(houses) {
    const dpArray = Array.from({ length: houses.length }).fill(-1);

    function execute(idx = houses.length - 1) {
      if (idx < 0) return 0;
      if (dpArray[idx] !== -1) return dpArray[idx];

      const amt1 = execute(idx - 1);
      const amt2 = execute(idx - 2) + houses[idx];
      const total = Math.max(amt1, amt2);

      dpArray[idx] = total;
      return total;
    }

    return execute();
  }

  const ans1 = calculate(nums.slice(0, nums.length - 1));
  const ans2 = calculate(nums.slice(1));

  return Math.max(ans1, ans2);
};

console.log(rob([1, 2, 3]));
