/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function (nums, k) {
  const set = new Set();
  let l = 0;

  for (let r = 0; r < nums.length; i++) {
    if (r - l > k) {
      set.delete(nums[l]);
      l++;
    }
    if (set.has(nums[r])) return true;
    set.add(nums[r]);
  }

  return false;
};

// [1,2,3,1,2,3]
// 2
