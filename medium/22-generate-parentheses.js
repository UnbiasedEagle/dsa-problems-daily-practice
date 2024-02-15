/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  function execute(str = '', openingBracketCount = 0, closingBracketCount = 0) {
    if (str.length === 2 * n && openingBracketCount === closingBracketCount) {
      result.push(str);
      return;
    }

    if (openingBracketCount > n) {
      return;
    }

    if (openingBracketCount > closingBracketCount) {
      execute(str + ')', openingBracketCount, closingBracketCount + 1);
    }
    execute(str + '(', openingBracketCount + 1, closingBracketCount);
  }

  execute();
  return result;
};
