/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const numSum = nums.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return (nums.length * (nums.length + 1)) / 2 - numSum;
};
