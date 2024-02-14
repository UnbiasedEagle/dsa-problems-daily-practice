/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const set = new Set();

  function helper(idx = 0, word = '') {
    if (word.length === s.length) {
      set.add(word);
      return;
    }
    helper(idx + 1, word + s.charAt(idx).toLowerCase());
    helper(idx + 1, word + s.charAt(idx).toUpperCase());
  }

  helper();

  return Array.from(set);
};
