/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const totalSum = nums.reduce((acc, curr) => acc + curr, 0);
  let currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    totalSum -= nums[i];
    if (currSum === totalSum) return i;
    currSum += nums[i];
  }

  return -1;
};
