/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  function addCombinations(current, start = 0, arr = []) {
    if (current === 0) {
      result.push([...arr]);
      return;
    }
    if (current < 0) {
      return;
    }
    if (start >= candidates.length) return;

    if (current - candidates[start] >= 0) {
      arr.push(candidates[start]);
      addCombinations(current - candidates[start], start, arr);
      arr.pop();
    }
    addCombinations(current, start + 1, arr);
  }

  addCombinations(target);

  return result;
};
