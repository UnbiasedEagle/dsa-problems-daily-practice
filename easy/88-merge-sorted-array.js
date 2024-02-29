/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let low = 0;
  let high = m - 1;

  while (low < high) {
    [nums1[low], nums1[high]] = [nums1[high], nums1[low]];
    low++;
    high--;
  }

  nums1.reverse();

  let i = nums1.length - m;
  let j = 0;

  let idx = 0;

  while (i < nums1.length && j < n) {
    if (nums1[i] < nums2[j]) {
      nums1[idx] = nums1[i];
      i++;
    } else {
      nums1[idx] = nums2[j];
      j++;
    }
    idx++;
  }

  while (j < n) {
    nums1[idx] = nums2[j];
    j++;
    idx++;
  }
};
