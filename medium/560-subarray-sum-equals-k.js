/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const sumMap = {};
  let count = 0;
  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    current += nums[i];

    if (current === k) {
      count++;
    }

    const comp = current - k;

    if (sumMap.hasOwnProperty(comp)) {
      count += sumMap[comp];
    }

    sumMap[current] = (sumMap[current] || 0) + 1;
  }

  return count;
};
