/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const map = new Map();

  const result = Array.from({ length: nums1.length }).fill(-1);

  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], i);
  }

  const stack = [];

  for (let i = nums2.length - 1; i >= 0; i--) {
    while (stack.length > 0 && nums2[i] >= stack[stack.length - 1]) {
      stack.pop();
    }

    if (map.has(nums2[i]) && stack.length > 0) {
      const idx = map.get(nums2[i]);
      result[idx] = stack[stack.length - 1];
    }

    stack.push(nums2[i]);
  }

  return result;
};
