/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = [];

  function execute(current = n, start = 1, arr = []) {
    if (current === 0 && arr.length === k) {
      result.push([...arr]);
      return;
    }

    for (let i = start; i <= 9; i++) {
      if (current - i < 0) {
        break;
      }
      arr.push(i);
      execute(current - i, i + 1, arr);
      arr.pop();
    }
  }

  execute();

  return result;
};
