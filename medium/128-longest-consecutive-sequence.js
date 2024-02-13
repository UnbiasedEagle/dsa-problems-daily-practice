/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let maxLength = 0;

  for (const item of nums) {
    if (!set.has(item - 1)) {
      let length = 0;
      let current = item;

      while (set.has(current)) {
        length++;
        current++;
      }

      maxLength = Math.max(length, maxLength);
    }
  }

  return maxLength;
};
