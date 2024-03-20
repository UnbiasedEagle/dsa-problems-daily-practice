/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

var shuffle = function (nums, n) {
  for (let i = 0; i < n; i++) {
    nums[i] = nums[i] << 10;
    nums[i] = nums[i] | nums[i + n];
  }

  let idx = 2 * n - 1;
  for (let i = n - 1; i >= 0; i--) {
    const y = nums[i] & (2 ** 10 - 1);
    const x = nums[i] >> 10;

    nums[idx--] = y;
    nums[idx--] = x;
  }

  return nums;
};
