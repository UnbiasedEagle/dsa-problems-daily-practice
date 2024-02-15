/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  function addCombinations(start = 1, arr = []) {
    if (arr.length === k) {
      result.push([...arr]);
      return;
    }
    for (let j = start + 1; j <= n; j++) {
      arr.push(j);
      addCombinations(j, arr);
      arr.pop();
    }
  }

  for (let i = 1; i <= n - k + 1; i++) {
    addCombinations(i, [i]);
  }

  return result;
};
