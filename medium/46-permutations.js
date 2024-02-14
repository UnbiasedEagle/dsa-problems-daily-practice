/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  const visited = Array.from({ length: nums.length }).fill(false);

  function add(arr = []) {
    if (arr.length === nums.length) {
      result.push([...arr]);
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
