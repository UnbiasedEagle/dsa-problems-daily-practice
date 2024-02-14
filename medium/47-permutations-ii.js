/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);

  const set = new Set();
  const result = [];
  const visited = Array.from({ length: nums.length }).fill(false);

  function add(arr = []) {
    if (arr.length === nums.length) {
      const key = arr.join();
      if (!set.has(key)) {
        result.push([...arr]);
        set.add(key);
      }
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        arr.push(nums[i]);
        add(arr);
        arr.pop();
        visited[i] = false;
      }
    }
  }

  add();

  return result;
};
