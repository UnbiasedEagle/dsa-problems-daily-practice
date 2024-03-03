/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();

  k = k + 1;

  for (let i = 0; i < Math.min(nums.length, k); i++) {
    if (map.has(nums[i])) {
      return true;
    }
    map.set(nums[i], 1);
  }

  for (let i = k; i < nums.length; i++) {
    map.set(nums[i - k], map.get(nums[i - k]) - 1);

    if (map.get(nums[i - k]) === 0) {
      map.delete(nums[i - k]);
    }

    if (map.has(nums[i])) {
      return true;
    }

    map.set(nums[i], 1);
  }

  return false;
};

// [1,2,3,1,2,3]
// 2
