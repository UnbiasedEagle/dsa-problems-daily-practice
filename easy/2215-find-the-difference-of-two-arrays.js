/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const result1 = new Set();
  const result2 = new Set();

  for (const num of nums1) {
    if (!set2.has(num)) {
      result1.add(num);
    }
  }

  for (const num of nums2) {
    if (!set1.has(num)) {
      result2.add(num);
    }
  }

  return [Array.from(result1), Array.from(result2)];
};
