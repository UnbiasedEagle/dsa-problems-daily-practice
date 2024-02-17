/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const digitMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const result = [];

  function execute(idx = 0, str = '') {
    if (idx === digits.length) {
      if (str.length > 0) {
        result.push(str);
      }

      return;
    }

    for (const char of digitMap[digits[idx]]) {
      execute(idx + 1, str + char);
    }
  }

  execute();

  return result;
};
