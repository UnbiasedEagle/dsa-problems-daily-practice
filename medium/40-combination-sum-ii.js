/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];

  candidates = candidates.sort((a, b) => a - b);

  function addCombination(current = target, start = 0, arr = []) {
    if (current === 0) {
      result.push([...arr]);
      return;
    }

    if (current < 0 || start >= candidates.length) return;

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      if (current - candidates[i] >= 0) {
        arr.push(candidates[i]);
        addCombination(current - candidates[i], i + 1, arr);
        arr.pop();
      }
    }
  }

  addCombination();

  return result;
};
