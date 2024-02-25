/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const store = Array.from({ length: nums.length + 1 }, () => []);
  const freqMap = {};

  for (const num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  for (const key in freqMap) {
    store[freqMap[key]].push(+key);
  }

  const result = [];

  let i = nums.length;

  while (i > 0 && k > 0) {
    let j = 0;
    while (j < store[i].length && k > 0) {
      result.push(store[i][j]);
      j++;
      k--;
    }
    i--;
  }

  return result;
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
