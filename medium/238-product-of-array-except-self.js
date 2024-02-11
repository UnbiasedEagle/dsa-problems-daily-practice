/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const rightProduct = Array.from({ length: nums.length + 1 }).fill(1);

  const result = Array.from({ length: nums.length }).fill(1);

  for (let i = nums.length - 1; i >= 0; i--) {
    rightProduct[i] = rightProduct[i + 1] * nums[i];
  }

  let leftProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProduct * rightProduct[i + 1];
    leftProduct *= nums[i];
  }

  return result;
};
