/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const result = [];

  let low = 0;
  let high = nums.length - 1;

  let idx = nums.length - 1;

  while (low <= high) {
    const square1 = nums[low] * nums[low];
    const square2 = nums[high] * nums[high];

    if (square1 < square2) {
      result[idx--] = square2;
      high--;
    } else {
      result[idx--] = square1;
      low++;
    }
  }

  return result;
};
